// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/roles.sqlite3'
    },
    useNullAsDefault: true
  },

};

//npx knex init
//npx knex migrate: make create_roles_table
//npx knex migrate:latest

//remove a added table 
// npx knex migrate:rollback

//seeding
//npx knex seed:make 001-roles
// npx knex seed:run