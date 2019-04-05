const assert = require('assert');
const request = require('../modules/request');

describe('request module', function() {

    it(`should throw an exception when url is invalid`, async function(){
        await assert.rejects(async () => {
            await request.get('www.comxx');
        }, 
        {
            name: 'TypeError [ERR_INVALID_URL]'
        }
        );
    });


    it('should throw an exception if https protocol not used', async function(){
        await assert.rejects(async () => {
            await request.get('http://www.google.com');
        }, 
        {
            name: 'TypeError [ERR_INVALID_PROTOCOL]'
        }
        );
    });


    it('should throw an exception if response is not valid json', async function(){
        await assert.rejects(async () => {
            await request.get('https://www.google.com');
        }, 
        {
            name: 'SyntaxError'
        }
        );
    });

    
    
})