import express from 'express'; 
const moviesRouter= express.Router();


moviesRouter.get('/', (req,res) => {
    res.send('These are the best movies')
})




export default moviesRouter;