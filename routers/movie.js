import express from 'express';
import {
  getMovies,
  CreateMovie,
  getMovie,
  deleteMovie,
  updateMovie,
} from '../controllers/movie.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', CreateMovie);

router.get('/:id', getMovie);

router.delete('/:id', deleteMovie);

router.patch('/:id', updateMovie);

export default router;