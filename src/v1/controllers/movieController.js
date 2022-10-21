import dotenv from 'dotenv';
import { INTERNAL_SERVER_ERROR, NOT_FOUND, CREATED, OK } from 'http-status';

import movieHelper from '../helpers/movieHelper';
import paginateHelper from '../helpers/paginateHelper';
import responseHelper from '../helpers/responseHelper';

dotenv.config();

/**
* This class contains all methods (functions) required to handle
* viewAllMovies function.
* viewFavoriteMovies function.
* addMovie
* viewMovie
* editMovie
*/
class MovieController {
  /**
     * Handle viewAllMovies.
     * @param {object} req user request.
     * @param {object} res data response.
     * @param {object} next move response.
     * @returns {object} response.
     */
  static async viewMovies(req, res, next) {
    try {
      const { start, end, pages, skip, paginate } = await paginateHelper.paginateData(req.query);
      const data = await movieHelper.viewMovies(skip, start);
      const count = await movieHelper.countMovies();

      const countAllData = data.count;
      const allDatata = data.rows;

      if (data.rows === undefined || data.rows.length === 0) {
        responseHelper.handleSuccess(NOT_FOUND, 'Movies not found', allDatata);
        return responseHelper.response(res);
      }

      req.data = { allDatata, countAllData, start, end, pages, skip, paginate, count };
      return next();
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle viewMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async viewMovie(req, res) {
    try {
      const data = await movieHelper.viewMovie(req.params.id);

      if (!data) {
        responseHelper.handleError(NOT_FOUND, `Movie with id ${req.params.id} not found`);
        return responseHelper.response(res);
      }

      responseHelper.handleSuccess(OK, `Success`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle addMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async addMovie(req, res) {
    try {
      const data = await movieHelper.addMovie(req.body);

      responseHelper.handleSuccess(CREATED, `Success`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle editMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async editMovie(req, res) {
    try {
      let data = await movieHelper.viewMovie(req.params.id);

      if (!data) {
        responseHelper.handleError(NOT_FOUND, `Movie with id ${req.params.id} not found`);
        return responseHelper.response(res);
      }

      data = await movieHelper.editMovie(req.params.id, req.body);
      responseHelper.handleSuccess(OK, `Success`, data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }

  /**
     * Handle deleteMovie.
     * @param {object} req user request.
     * @param {object} res data response.
     * @returns {object} response.
     */
  static async deleteMovie(req, res) {
    try {
      let data = await movieHelper.viewMovie(req.params.id);

      if (!data) {
        responseHelper.handleError(NOT_FOUND, `Movie with id ${req.params.id} not found`);
        return responseHelper.response(res);
      }

      data = await movieHelper.deleteMovie(req.params.id);
      responseHelper.handleSuccess(OK, `Success`);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}

export default MovieController;
