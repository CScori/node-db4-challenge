
exports.up = function(knex) {
return knex.schema.createTable('recipes', t => {
    t.increments('r_id')
    t.string('recipe_name', 256)
        .notNullable()
})
.createTable('ingredients', t => {
    t.increments('i_id')
    t.string('ingredient', 128)
        .notNullable()
})
.createTable('rec_ing', t => {
    t.increments('')
    t.float('qty')
        .notNullable()
    t.integer('r_id')
        .unsigned()
        .notNullable()
        .references('r_id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    t.integer('i_id')
        .unsigned()
        .notNullable()
        .references('i_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
})
.createTable('steps', t => {
    t.increments('s_id')
    t.integer('order')
    t.string('directon', 48)
    t.integer('r_id')
        .unsigned()
        .notNullable()
        .references('r_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')


})
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('rec_ing')
    .dropTableIfExists('ingredientss')
    .dropTableIfExists('recipes')
};
