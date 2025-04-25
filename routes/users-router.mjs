import express from 'express'; 
import * as usersController from '../controllers/users-controller.mjs'
const usersRouter= express.Router();



///////////////////////////////////////////////
///Routes/ API Endpoints
///////////////////////////////////////////////

//All users routes; INDUCES and thier corresponding controller functions(CRUD)

//////Seed//////
///seed routes helps us easily populate our database 
usersRouter.get('/seed', usersController.seedUsers)

//INDUCES

//Index
usersRouter.get('/', usersController.getUsers);

//New- Renders a form where the user can create a new user. Submitting this form will call the CREATE user route
usersRouter.get('/new', usersController.renderNewForm);

//Delete
usersRouter.delete('/:id', usersController.deleteUser);

//Update


//Create
usersRouter.post('/', usersController.createUser);

//Edit- this would rendr a form similar to the userRouter.get (render new Form) 


//Show (render a route for an indicidual to be seen )(create it)
//get a specific user instead of all the users 






export default usersRouter;