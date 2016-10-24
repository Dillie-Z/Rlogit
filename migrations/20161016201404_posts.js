'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts',(table)=>{
    table.increments();
    table.string('genre')
      .notNullable()
      .defaultTo('general');
    table.string('title')
      .notNullable()
      .defaultTo('');
    table.text('post')
      .notNullable()
      .defaultTo('');
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
