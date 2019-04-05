const assert = require('assert');

describe('Memory Cache', function() {
    
    const mcache = require('../modules/memory_cache');
    it('should return cache value when key exists', function() {
        const cache = new mcache(60000);
        cache.set('key1', {hello: 'world'});
        let data = cache.get('key1');

        assert.deepStrictEqual(data, {hello:'world'});
    });

    it('should return null on a key that does not exist', function(){
        const cache = new mcache(6000);
        cache.set('key1', {hello: 'world'});
        // manually set cache entry to expire
        cache.cache.key1.expires = new Date('2019-01-01');
        let data = cache.get('key1');

        assert.strictEqual(data, null);
    });


    it('should return null on an expired entry', function(){
        const cache = new mcache(6000);
        cache.set('key1', {hello: 'world'});
        let data = cache.get('key2');

        assert.strictEqual(data, null);
    })

});