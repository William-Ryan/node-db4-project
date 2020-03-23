const db = require('../data/knex-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('recipes as r')
    .select('r.recipe_name as recipe, i.ingredient, i.measurement')
    .join('recipe_ingredients as ri', 'r.id', '=', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
    .where(id)
}

function getInstructions(id){
    return db('recipes as r')
    .select('r.recipe_name as recipe, r.steps')
    .where(id)
}