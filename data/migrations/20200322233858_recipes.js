
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()

        tbl.varchar('recipe_name', 100)
            .notNullable()

        tbl.text('description')

        tbl.text('steps')
    })
    .createTable('ingredients', tbl => {
        tbl.increments()

        tbl.text('ingredient')
            .notNullable()

        tbl.text('measurement')
            .notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.primary(['recipe_id', 'ingredient_id'])

        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')

        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
