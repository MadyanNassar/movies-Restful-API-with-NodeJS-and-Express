import { v4 as uuidv4 } from 'uuid';

let movies = [{
    id: "1",
    title: "Inception",
    director: "Christopher Nolan",
    release_date: "2010-07-16"
},
{
    id: "2",
    title: "The Irishman",
    director: "Martin Scorsese",
    release_date: "2019-09-27"
}
]

// get the list of movies in the form of JSON
export const getMovies = (req, res) => {
    res.json(movies)
}

// add movie to the list of movies
export const CreateMovie = (req, res) => {
    const movie = req.body
    const title = req.body.title;
    const director = req.body.director;
    const release_date = req.body.release_date
    if (!title || !director || !release_date){
        return res.status(400).send({ msg: "Please include Movie name and Director name!!." });
    }

    movies.push({ ...movie, id: uuidv4() });
    res.status(200).send(`The movie with the title ${title} added to the database!!.`);
}

// search for a movie
export const getMovie = (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) {
        return res.status(400).send({ msg: `the Movie with the id : ${id} is not exist` });
    }
    res.status(200).json(movie);
}

// remove a movie from movies list
export const deleteMovie = (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
          return res.status(400).send({ msg: `the Movie with the id : ${id} is not exist!!.` });
      }

      movies = movies.filter((movie) => movie.id !== id);
      res.send(`the Movie with the id ${id} deleted from the database!!.`);
}

// update a movie
export const updateMovie = (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) {
        return res.status(400).send({ msg: `the Movie with the id : ${id} is not exist!!.` });
    } 
    const { title, director, release_date } = req.body;
    if (title) movie.title = title;
    if (director) movie.director = director;
    if (release_date) movie.release_date = release_date;
    res.send(`The movie has been updated!!.`);

}
