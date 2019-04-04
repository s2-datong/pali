const config = require('./config')
const request = require('./request')
const memory_cache = require('./memory_cache');
const cache = new memory_cache(config.cacheLifeSpan);

module.exports = async (id) => {
    // fetch meal from cache if available
    let meal = cache.get(`meal_${id}`);
    if(meal != null){
        return meal;
    }

    // if not, retrieve from url
    // count number of ingredients and cache value
    let url = `${config.api}?i=${id}`;
    try{
        let result = await request.get(url);
        let meal = result.meals[0];

        // count ingredients
        let ingredientCount = 0;
        const mKeys = Object.keys(meal);
        mKeys.forEach(key => {
            if(key.toLowerCase().indexOf('stringredient') != -1){
                if(meal[key] !== '' && 
                    meal[key] !== null && typeof meal[key] !== 'undefined'){
                        ingredientCount += 1;
                    }
            }
        })

        let entry = {id, ingredientCount};
        cache.set(`meal_${id}`);

        return entry;

    }
    catch(e){
        return null;
    }
}