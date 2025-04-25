import express from 'express'; 
const reviewsRouter= express.Router();


reviewsRouter.get('/', (req,res) => {
    res.send('These are the best movie reviews')
})




export default reviewsRouter;