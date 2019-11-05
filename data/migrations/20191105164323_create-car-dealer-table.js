
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
    tbl.increments();
    tbl.text('VIN').unique().notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.string('transmission_type');
    tbl.string('status');
  });  
};

exports.down = function(knex) {
  return knex.dropTableIfExists('car-dealer');
};
