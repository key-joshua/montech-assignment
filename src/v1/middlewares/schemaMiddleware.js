import Joi from 'joi';
import validateSchema from './validateSchema';

/**
   * Handle validateRegisterUser.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const validateAddMovie = (req, res, next) => {
  const dataSchema = Joi.object()
    .keys({
      name: Joi.string().min(3).max(50).required()
        .messages({
          'any.required': 'name is required',
          'string.empty': 'name is not allowed to be empty',
        }),
      ranking: Joi.number().required()
        .messages({
          'any.required': 'ranking is required',
          'string.empty': 'ranking is not allowed to be empty',
        }),
      rating: Joi.number().required()
        .messages({
          'any.required': 'rating is required',
          'string.empty': 'rating is not allowed to be empty',
        }),
      cast: Joi.array().min(1).items(Joi.string()).required()
        .messages({
          'any.required': 'cast is required',
          'string.empty': 'cast is not allowed to be empty',
        }),
      releaseDate: Joi.date().required()
        .messages({
          'any.required': 'releaseDate is required',
          'string.empty': 'releaseDate is not allowed to be empty',
        }),
    })
    .options({ abortEarly: false });

  return validateSchema(dataSchema, req.body, res, next);
};

/**
   * Handle validateRegisterUser.
   * @param {object} req user request.
   * @param {object} res data response.
   * @param {object} next move.
   * @returns {object} response.
   */
const validateRankMovie = (req, res, next) => {
  const dataSchema = Joi.object()
    .keys({
      ranking: Joi.number().required()
        .messages({
          'any.required': 'ranking is required',
          'string.empty': 'ranking is not allowed to be empty',
        }),
    })
    .options({ abortEarly: false });

  return validateSchema(dataSchema, req.body, res, next);
};

export { validateAddMovie, validateRankMovie };
