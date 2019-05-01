Review

- joins (inner and left)
- table aliasing
- aggregate functions with grouping
- pagination
- concatenation
- is null (is not null)

Schema

- structure of .....
  - database
  - table
- create tables.
- add columns to tables.

## migrations

- run `npx knex init` to generate a `./knexfile.js`
- modify `knexfile.js` to configure our db connections
- remove staging and production configurations from `knexfile.js`
- make a migration for each db schema change
