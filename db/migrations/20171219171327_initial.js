
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id').unsigned().primary();
      table.string('username', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('first_name', 100).nullable();
      table.string('last_name', 100).nullable();
      table.string('phone_number', 20).nullable();
      table.string('street', 100).nullable();
      table.string('city', 100).nullable();
      table.string('zip_code', 5).nullable();
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 5).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('users')
  ]);
};
