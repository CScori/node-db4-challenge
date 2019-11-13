
exports.seed = function(knex) {
  // Deletes ALL existing entriesknex
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {order: '1', directon:'add milk to sugar', r_id: 1},
        {order: '2', directon:'butter to milk', r_id: 1},
        {order: '3', directon:'mix all', r_id: 1},
       
      ]);
    });
};
