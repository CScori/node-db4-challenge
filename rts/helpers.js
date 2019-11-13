const db = require('../data/dbConfig.js')

module.exports = {
    findRecipes,
    findShopping,
    findInstructions 
}

function findRecipes() {
    return db
        .select('*')
        .from('recipes')
}
function findShopping(r_id) {
    return db
        .select('q.id', 'i.ingredient', 'q.qty')
        .from('rec_ing as q')
        .join('ingredients as i', 'q.i_id', '=', 'i.i_id' )
        .where('q.r_id', '=', r_id )
    // select q.id, i.ingredient, q.qty from rec_ing as q
    // join ingredients as i
    // on q.i_id = i.i_id
    // where q.r_id = 2
}
function findInstructions(r_id) {
    return db
        .select('*')
        .from('steps')
        .where('r_id', '=', r_id)
        .orderBy('order')
    // select * from steps
    // where r_id = 1
    // order by steps.[order]

}