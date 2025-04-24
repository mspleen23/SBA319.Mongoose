import mongoose from 'mongoose'; 

// Schema set up: mongoose.model(name of the model, schema for the model to follow)

const userSchema= new mongoose.Schema(
    {
    name: {type: String, required: true}, 
    favoriteGenre: {type: String,required: true},
    age: {type: Number, required: true},
    },
    {
        {timestamps: true }
    }
)

const User = mongoose.model('User', userSchema)
export default User;