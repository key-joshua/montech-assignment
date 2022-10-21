import tables from '../../config/database/models';

const { Movie } = tables;

/**
* This class contains all methods (functions) required to handle
* countMovies function.
* viewMovies function.
* addMovie function.
* viewMovie function.
* editMovie function.
* deleteMovie function.
*/
class MovieHelper {
  /**
     * Count all movies from movies table in database.
     * @returns {object} return data.
     */
  static async countMovies() {
    const data = await Movie.count();
    return data;
  }

  /**
   * View all movies from movies table in database.
   * @param {string} skip where to stop.
   * @param {string} start where to start.
   * @returns {object} return data.
   */
  static async viewMovies(skip, start) {
    const data = await Movie.findAndCountAll({ limit: skip, offset: start });
    return data;
  }

  /**
   * Add movie from movies table in database.
   * @param {object} body movie details.
   * @returns {object} return data.
   */
  static async addMovie(body) {
    const data = await Movie.create({
      createdAt: new Date(),
      updatedAt: new Date(),
      name: body.name,
      rating: body.rating,
      ranking: body.ranking,
      cast: body.cast,
      releaseDate: body.releaseDate
    });

    return data;
  }

  /**
   * View movie from movies table in database.
   * @param {integer} id movie id.
   * @returns {object} return data.
   */
  static async viewMovie(id) {
    const data = await Movie.findOne({ where: { id } });
    return data;
  }

  /**
   * Edit movie from movies table in database.
   * @param {integer} id movie id.
   * @param {object} body movie details.
   * @returns {object} return data.
   */
  static async editMovie(id, body) {
    await Movie.update({ ranking: body.ranking }, { where: { id } });

    return this.viewMovie(id);
  }

  /**
   * Delete movie from movies table in database.
   * @param {integer} id movie id.
   * @returns {string} a destroyed session.
   */
  static async deleteMovie(id) {
    const data = await Movie.destroy({ where: { id } });
    return data;
  }
}

export default MovieHelper;
