// implement changes to the schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', table => {
        //each table needs a primary key
        // we'll call it id, integer, auto-increment
        table.increments();
        table
        .string('name', 128).notNullable()
        .unique();
        table.timestamps(true, true)// creates a create_at and updated_at
    })
};
// undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles')

};
