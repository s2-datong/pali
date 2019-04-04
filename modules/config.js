module.exports = {
    api: 'https://www.themealdb.com/api/json/v1/1/lookup.php',
    cacheLifeSpan: process.env.CACHE_LIFE_SPAN || 60 * 60 * 24,
    allowOneMealId: process.env.ALLOW_ONE_MEAL_ID || true,
    port: process.env.PORT || 3000
}