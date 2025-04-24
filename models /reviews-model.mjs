import mongoose from 'mongoose'; 

// Schema set up: mongoose.model(name of the model, schema for the model to follow)

const reviewSchema= new mongoose.Schema(
    {
    rating: {type: Number, required: true}, 
    review: {type: String, required: true},
    },
    {
        {timestamps: true }
    }
   );

   const Review = mongoose.model('Review', reviewSchema)
   export default Review;

