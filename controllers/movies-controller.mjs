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

// async function createUser(req,res){
//     try{
//         const user= await User.create(req.body);
//         res.status(201).json(user);
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
// }

// async function renderNewForm(req,res) {
//     try{
//         res.render('./users/new.ejs');
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
// }

// async function deleteUser(req,res){
//         try{
//             const deleteUser = await User.findByIdAndDelete(req.params.id);
//             res.status(301).redirect('/users');
//         }catch(error){
//             res.status(400).json({error: error.message});
//         }
// }

// async function updateUser(req,res){
//     try{
//         const updateUser= await User.findByIdAndUpdate(req.params.id,req.body);
//         res.status(301).redirect('/users');
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
//     }

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
//     createUser,
//     renderNewForm,
//     deleteUser,
//     updateUser,
//     getUser, 
 }