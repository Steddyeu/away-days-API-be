exports.up = function (knex) {
  return knex.schema.createTable("stadiums", (stadiumsTable) => {
    stadiumsTable.increments("stadium_id").primary();
    stadiumsTable.string("name").notNullable();
    stadiumsTable.string("city").notNullable();
    stadiumsTable.string("logo");
    stadiumsTable.string("picture");
    stadiumsTable.string("longitude");
    stadiumsTable.string("latitude");
    stadiumsTable.string("color");
    stadiumsTable.string("club").notNullable();
    stadiumsTable.string("country");
    stadiumsTable.integer("capacity").notNullable();
    stadiumsTable.string("postcode").notNullable();
    stadiumsTable.text("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stadiums");
};
