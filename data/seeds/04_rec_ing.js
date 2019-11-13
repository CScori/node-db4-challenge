
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rec_ing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ing').insert([
        {qty: 3, r_id: 1 , i_id: 2 },
        {qty: 2 , r_id: 1, i_id: 1 },
        {qty: 5, r_id: 1 , i_id: 3},
        {qty: 3, r_id: 2 , i_id: 2 },
        {qty: 2 , r_id: 2, i_id: 1 },
        {qty: 2, r_id: 2 , i_id: 3},
        
      ]);
    });
};
