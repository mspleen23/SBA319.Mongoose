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

//New

//Delete

//Update

//Create
usersRouter.post('/', usersController.createUser);






export default usersRouter;