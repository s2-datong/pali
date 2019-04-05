const http = require('http');
const config = require('./modules/config');
const process_meals = require('./modules/process_meals');

const server = http.createServer((req, res) => {

    let url = req.url.substring(1);
    let ids = url.split('/');

    process_meals(ids)
    .then(meal => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            mealId: meal.id,
            ingredientCount: meal.ingredientCount
        }));
    })
    .catch(err => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            error: {
                message: err.message
            }
        }));
    })

})
  
server.listen(config.port, '0.0.0.0', () => {
    console.log(`Server running at ${config.port}`);
})
  
