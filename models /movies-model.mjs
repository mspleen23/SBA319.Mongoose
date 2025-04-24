import mongoose from 'mongoose'; 

// Schema set up: mongoose.model(name of the model, schema for the model to follow)

const movieSchema= new mongoose.Schema(
    {
    name: {type: String, required: true}, 
    genre: {type: String,required: true},
    year: {type: Number, required: true},
    },
  
    { {timestamps: true }}

);

const Movie = mongoose.model('Movie', movieSchema)
export default Movie;













mongoose.model(movies, schema)