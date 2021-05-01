
import express from 'express';
import router from './routers/movie.js';

const app = express()

// Parse JSON using express
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const PORT = 5000;

app.use('/movie', router);


app.get('/', (req, res) => {
    res.send('Hello there You are in the Homepage !!!.');
 });
app.listen(PORT, ()=> console.log(`The server is running on host : http://localhost:${PORT}`))