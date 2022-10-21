import Router from 'express';
import paginate from '../middlewares/paginateMiddleware';
import movieController from '../controllers/movieController';
import { validateAddMovie, validateRankMovie } from '../middlewares/schemaMiddleware';

const router = Router();
router

  .get('/view-movie/:id', movieController.viewMovie)
  .get('/view-movies', movieController.viewMovies, paginate.paginateData)

  .delete('/delete-movie/:id', movieController.deleteMovie)
  .post('/add-movie', validateAddMovie, movieController.addMovie)
  .patch('/ranking-movie/:id', validateRankMovie, movieController.editMovie);

export default router;
