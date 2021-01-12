
exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('cidade').notNullable();
    table.string('whats').notNullable();
    table.string('uf', 2).notNullable();
    table.timestamps();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('ongs')
};
