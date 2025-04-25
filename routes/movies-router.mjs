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

// //New- Renders a form where the user can create a new user. Submitting this form will call the CREATE user route
// usersRouter.get('/new', usersController.renderNewForm);

// //Delete
// usersRouter.delete('/:id', usersController.deleteUser);

// //Update
// usersRouter.put('/:id', usersController.updateUser);

// //Create
// usersRouter.post('/', usersController.createUser);

// //Edit- this would rendr a form similar to the userRouter.get (render new Form) 


// //Show (render a route for an individual to be seen ).We are getting a specific user instead of all the users
// usersRouter.get('/:id', usersController.getUser); 






export default moviesRouter;