import express from 'express'; 
import * as reviewsController from '../controllers/reviews-controller.mjs'
const reviewsRouter= express.Router();

/////////////////////////////////////////////////////////////////////////
///////////////  Routes/API Endpoints/CRUD/INDUCES  ////////////////////
////////////////////////////////////////////////////////////////////////

                      //////Seed Routes//////
///Seed routes helps us easily populate our database 
reviewsRouter.get('/seed', reviewsController.seedReviews);


          //////////////////////////INDUCES//////////////////////////

//1. Index (You are getting all the movies)
reviewsRouter.get('/', reviewsController.getReviews);

//New- Dont need 

//Delete
reviewsRouter.delete('/:id', reviewsController.deleteReview);

//Update
reviewsRouter.put('/:id', reviewsController.updateReview);

//Create
reviewsRouter.post('/', reviewsController.createReview);

// //Edit- this would rendr a form similar to the userRouter.get (render new Form) 
// //Dont need 

//Show (render a route for an individual to be seen ).We are getting a specific user instead of all the users
reviewsRouter.get('/:id', reviewsController.getReview); 

export default reviewsRouter;

