'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          genre:'rules',
          title:'The Forum Rules',
          post:'Just be a good Human being, That and keep the Trolling to a minimum',
          user_id:1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          genre:'general',
          title:'How about that life stuff?',
          post:'isnt life just swell, with all of it surprises',
          user_id:1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          genre:'science',
          title:'How about that science stuff?',
          post:'isnt science just swell, with all of it cool new stuff it brings in to this world.',
          user_id:1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          genre:'general',
          title:'How about that life stuff?',
          post:'isnt life just swell, with all of it surprises',
          user_id:1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          genre:'tech',
          title:'How about that Tech stuff?',
          post:'isnt Tech just swell, with all of it surprises',
          user_id:1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          genre:'gaming',
          title:'How about that gaming stuff?',
          post:'isnt gaming just swell, with all of it surprises',
          user_id:1,
          created_at: new Date('2016-06-26 14:26:16 UTC'),
          updated_at: new Date('2016-06-26 14:26:16 UTC')
        }
    ])
    });
};
