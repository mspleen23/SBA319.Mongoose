import {config} from 'dotenv'; config(); 
//this allows the use of enviornmental variables coming from a .env file. 
import './database/database.mjs';
import express from 'express';//importing the package
import moviesRouter from './routes/movies-router.mjs';
import reviewsRouter from './routes/reviews-router.mjs';
import usersRouter from './routes/users-router.mjs';


const app = express()
const PORT = process.env.PORT || 5050


///////////////////////////////////////////
//// Middleware
////////////////////////////////////////// 
app.use(express.urlencoded())
//will allow me to have a req.body for when forms are submitted
app.use(express.json()) 
// this allows to have a req.body when j.son data are submitted without a form


//////////////////////////////////////////////////
///////Importing the route logic- "getting the remote control"
////////////////////////////////////////////////
// const userRoutes = require('./routes/userRoutes');
// const movieRoutes = require('./routes/movieRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');


//////////////////////////////////////////////////////////////////////////
///////Defines what should happen when a user visits that url "pairing the remote with your tv"
//////////////////////////////////////////////////////////////////////////
app.use('/movies', moviesRouter);
//for all routes that require movies, look for them in here
app.use('/users', usersRouter);
//for all routes that require users, look for them in here
app.use('/reviews', reviewsRouter);
//for all routes that require reviews, look for them in here

////////////////////////////////////////////
//////////Basic Routes 
/////////////////////////////////////////////
app.get('/', (req,res) =>{
    res.send('Welcome to my Movie Review Page')
});





/////////////////////////////////////////////////
////////Start the Express server//App.Listen
/////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });