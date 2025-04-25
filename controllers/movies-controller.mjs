//////Callback Functions File
import Movie from '../models/movies-model.mjs';

async function seedMovies(req,res) {
try{
   await Movie.deleteMany({});
   await Movie.create(
    {
    name: 'Meet the Fockers',
    genre: 'Comedy',
    year: '2004'
   },{
    name: 'Unbreakable',
    genre: 'Thriller',
    year: '2000'
   },{
    name: 'Man on Fire',
    genre: 'Action',
    year: '2004'
   },{
    name: 'Waiting to Exhale',
    genre: 'Romance',
    year: '1995'
   }
)
res.status(201).redirect('/movies'); //means create it and then redirect to the users route where all the users will be found
} catch(error) {
    res.status(400).json({error: error.message })
}
}

async function getMovies(req,res){
    try{
        const movies= await Movie.find({});
        res.status(200).json(movies);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function createMovie(req,res){
    try{
        const movie= await Movie.create(req.body);
        res.status(201).json(movie);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function deleteMovie(req,res){
        try{
            const deleteMovie = await Movie.findByIdAndDelete(req.params.id);
            res.status(301).redirect('/movies');
        }catch(error){
            res.status(400).json({error: error.message});
        }
}

async function updateMovie(req,res){
    try{
        const updateMovie= await Movie.findByIdAndUpdate(req.params.id,req.body);
        res.status(301).redirect('/movies');
    }catch(error){
        res.status(400).json({error: error.message});
    }
    }

//     async function getUser(req,res){
//         try{
//             const getUser= await User.findById(req.params.id);
//             res.status(200).json(getUser);
//         }catch(error){
//             res.status(400).json({error: error.message});
//         }
//     }


export{
    seedMovies,
    getMovies,
    createMovie,
    deleteMovie,
    updateMovie,
//     getUser, 
 }