const joi = require('@hapi/joi');

//el esquema de mongo para id es un string de 24 caracteres
const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const userSchema = {
  name: joi.string().max(100).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
}

const createUserSchema = {
  ...userSchema,
  isAdmin: joi.boolean(),
}

const createProviderUserSchema = {
  ...userSchema,
  apiKeyToken: joi.string().required()
}

module.exports = {
  userIdSchema,
  createUserSchema,
  createProviderUserSchema,
}