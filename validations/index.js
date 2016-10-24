'use strict';

const Joi = require('joi');

module.exports.signup = {
  body: {
    firstName: Joi.string()
      .label('First Name')
      .required()
      .trim()
      .regex(/[\w\-'\s]/)
      .max(30),

    lastName: Joi.string()
      .label('Last Name')
      .required()
      .trim()
      .regex(/[\w\-'\s]/)
      .max(30),

    email: Joi.string()
      .label('Email')
      .required()
      .email()
      .trim(),

    password: Joi.string()
      .label('Password')
      .required()
      .trim()
      .min(8)
      .strip()
  }
};

module.exports.login = {
  body:{
    email: Joi.string()
      .label('Email')
      .required()
      .email()
      .trim(),

    password: Joi.string()
      .label('Password')
      .required()
      .trim()
      .min(8)
      .strip()
  }
}

module.exports.post = {
  body:{
    title: Joi.string()
      .label('Title')
      .required(),
    post: Joi.string()
      .label('post')
      .required()
  }
}

module.exports.comment = {
  body:{
    comment: Joi.string()
      .label('Comment')
      .required()
  }
}
