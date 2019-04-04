const get_meal = require('./get_meal');
const config = require('./config')

async function processMeals(ids){
    if(typeof ids == 'object' && typeof ids[0] != 'undefined'){

        if(ids.length == 1 && !config.allowOneMealId){
            throw new Error(`Only 1 meal id in array. Expecting at least 2`);
        }

        let selectedMeal = null;

        // compare ingredient count for each meal
        // and return the meal with the lowest count
        
        for(let index = 0; index < ids.length; index++){
            let id = ids[index];
            let meal = await get_meal(id);
            if(meal != null){
                if(selectedMeal == null){
                    selectedMeal = meal;
                }else{
                    if(meal.ingredientCount < selectedMeal.ingredientCount){
                        selectedMeal = meal;
                    }
                }
            }
        };

        return selectedMeal;
    }else{
        throw new Error('Expecting an array of ids');
    }
}

module.exports = processMeals;