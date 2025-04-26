import mongoose from 'mongoose'; 

// Schema set up: mongoose.model(name of the model, schema for the model to follow)

const reviewSchema= new mongoose.Schema(
    {
    id:{type: Number, required:true},
    movieName: {type: String, required: true},
    rating: {type: String, required: true}, 
    review: {type: String, required: true},
    },
    {timestamps: true }

   );

   const Review = mongoose.model('Review', reviewSchema)
   export default Review;

