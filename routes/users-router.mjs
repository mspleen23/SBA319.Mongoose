import express from 'express'; 
import * as usersController from '../controllers/users-controller.mjs'
const usersRouter= express.Router();

////////////////////////////////////////////////////////////////////////
///////////////  Routes/API Endpoints/CRUD/INDUCES  ////////////////////
////////////////////////////////////////////////////////////////////////

                        //////Seed Routes//////
///seed routes helps us easily populate our database 
usersRouter.get('/seed', usersController.seedUsers)

 //////////////////////////INDUCES//////////////////////////

//Index
//You are getting all the users
usersRouter.get('/', usersController.getUsers);

//New- Renders a form where the user can create a new user. Submitting this form will call the CREATE user route
usersRouter.get('/new', usersController.renderNewForm);

//Delete
usersRouter.delete('/:id', usersController.deleteUser);

//Update
usersRouter.put('/:id', usersController.updateUser);

//Create
usersRouter.post('/', usersController.createUser);

//Edit- this would rendr a form similar to the userRouter.get (render new Form)
//Dont need this  

//Show (render a route for an individual to be seen ).We are getting a specific user instead of all the users
usersRouter.get('/:id', usersController.getUser); 


export default usersRouter;