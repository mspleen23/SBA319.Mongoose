import express from 'express'; 
import * as moviesController from '../controllers/movies-controller.mjs'
const moviesRouter= express.Router();


/////////////////////////////////////////////////////////////////////////
///////////////  Routes/API Endpoints/CRUD/INDUCES  ////////////////////
////////////////////////////////////////////////////////////////////////

                      //////Seed Routes//////
///Seed routes helps us easily populate our database 
moviesRouter.get('/seed', moviesController.seedMovies)


          //////////////////////////INDUCES//////////////////////////

//1. Index (You are getting all the movies)
moviesRouter.get('/', moviesController.getMovies);

//New- Dont need 

//Delete
moviesRouter.delete('/:id', moviesController.deleteMovie);

//Update
moviesRouter.put('/:id', moviesController.updateMovie);

//Create
moviesRouter.post('/', moviesController.createMovie);

//Edit- this would rendr a form similar to the userRouter.get (render new Form) 
//Dont need 

//Show (render a route for an individual to be seen ).We are getting a specific user instead of all the users
moviesRouter.get('/:id', moviesController.getMovie); 






export default moviesRouter;