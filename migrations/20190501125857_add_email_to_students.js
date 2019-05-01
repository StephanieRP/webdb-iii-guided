
exports.up = function(knex, Promise) {
  return knex.schema.table('students', email => {
      email.string('email').unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('students', email => {
    email.dropColumn('email')
  })
};
