'use strict'
const knex = require('../db/knex');

function createComment(req, res) {
  console.log('comment user id',req.user.id);
  console.log('comment post id',req.params.id);
  // console.log('comment post genre',req.params.genre);
    knex('posts')
        .where({
            'id': req.params.id
        })
        .first()
        .then((post) => {
            console.log('comment post', post);
            if(!post){
              res.redirect('/genre/'+req.params.genre);

            }
            var newComment = {
                    comment: req.body.comment,
                    user_id: post.user_id,
                    post_id: req.params.id
                }
            console.log('comment newComment',newComment);
            knex('comments')
                .insert(newComment, '*')
                .then(() => {
                    res.redirect('/genre/'+req.params.genre);
                })
        })
        .catch((err) => {
            return err;
        })
}

function editComment(req, res) {
    console.log(req.body);
    knex('comments')
        .where({
            'id': req.params.id
        })
        .first()
        .then((comments) => {
          if (comments.user_id !== req.user.id) {
            res.redirect('/genre/'+req.params.genre)
          }
            const {
                comment
            } = req.body;
            if (comment) {
                comments.comment = comment
            }

            var editedComment = comments;
            delete editedComment.id
            knex('comments')
                .update(editedComment, '*')
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

function deleteComment(req, res) {
    knex('comments')
        .where({
            'id': req.params.id
        })
        .first()
        .then((comments) => {
            if (!comments) {
                res.redirect('/genre/'+req.params.genre)
            }
            if(comments.user_id !== req.user.id)[
              res.redirect('/genre/'+req.params.genre)
            ]
            return knex('comments')
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
  createComment,
  editComment,
  deleteComment
}
