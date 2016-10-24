'use strict'
const knex = require('../db/knex');

function createPost(req, res) {
  console.log('params post', req.params.genre);
    var newPost = {
        genre: req.params.genre,
        title: req.body.title,
        post: req.body.post,
        user_id: req.user.id
    }
    console.log('new Post', newPost);
    knex('posts')
        .insert(newPost, '*')
        .then((post) => {
            console.log('the crearted post', post);
            res.redirect('/genre/'+req.params.genre)
        })
        .catch((err) => {
            return err;
        })
}

function editPost(req, res) {
    console.log(req.body);
    knex('posts')
        .where({
            'id': req.params.id
        })
        .first()
        .then((posts) => {
          if (posts.user_id !== req.user.id) {
            res.redirect('/genre/'+req.params.genre)
          }
            const {
                title,
                post
            } = req.body;
            var post_id = posts.id;
            if (title) {
                posts.title = title;
            }
            if (post) {
                posts.post = post;
            }
            var editedPost = posts;
            delete editedPost.id;
            knex('posts')
                .update(editedPost, '*')
                .where({
                    'id': req.params.id
                })
                .then(() => {
                    res.redirect('/genre/'+req.params.genre)
                })
        })
        .catch((err) => {
            return err
        })
}

function deletePost(req, res) {
    console.log('delete lists function called');
    knex('posts')
        .where({
            'id': req.params.id
        })
        .first()
        .then((post) => {
          if (!post) {
                res.redirect('/genre/'+req.params.genre)
          }
          if (post.user_id !== req.user.id){
            res.redirect('/')
          }
          return knex('posts')
              .del()
              .where({
                  'id': req.params.id
              })
        })
        .then(() => {
            res.redirect('/genre/'+req.params.genre)
        })
        .catch((err) => {
            return err
        })
}

module.exports = {
    createPost,
    editPost,
    deletePost
}
