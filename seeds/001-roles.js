
exports.seed = function(knex, Promise) {
  return knex('roles')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'Web Student'},
        {name: 'Web TA'}      ]);
    });
};
