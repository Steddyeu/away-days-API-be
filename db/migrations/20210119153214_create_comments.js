exports.up = function (knex) {
  return knex.schema.createTable('comments', (commentsTable) => {
    commentsTable.increments('comment_id').primary();
    commentsTable.integer('stadium_id').references('stadiums.stadium_id');
    commentsTable.integer('valueForMoneyInGround').notNullable();
    commentsTable.integer('transport').notNullable();
    commentsTable.integer('pubsNearGround').notNullable();
    commentsTable.timestamp('created_at').defaultTo(knex.fn.now());
    commentsTable.text('thoughts');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};
