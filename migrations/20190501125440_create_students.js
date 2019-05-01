
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', student => {
      student.increments()

      student.string('name', 255).notNullable()
      // add foreign key
      student
      .integer('roles_id')
      .unsigned()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      
      student.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
