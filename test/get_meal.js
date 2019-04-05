const assert = require('assert');
const get_meal = require('../modules/get_meal')

describe('Get meal module', function(){
    
    it('should return null for an invalid meal id', async function(){
        let meal = await get_meal(1);
        assert.deepEqual(meal, null);
    });

    it('should return id and ingredient count for a valid meal id', async function(){
        let meal = await get_meal('52772');
        assert.ok(meal.hasOwnProperty('id') && meal.hasOwnProperty('ingredientCount'))
    });

});