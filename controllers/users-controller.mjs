//////Callback Functions File
import User from '../models/users-model.mjs';

async function seedUsers(req,res) {
try{
   await User.deleteMany({});
   await User.create(
    {
    name: 'Melissa',
    favoriteGenre: 'Thriller',
    age: '35'
   },
   {
    name: 'Marcus',
    favoriteGenre: 'Comedy',
    age: '32' 
   },
   {
    name: 'Amari',
    favoriteGenre: 'Action',
    age: '26'
   }
)
res.status(201).redirect('/users'); //means create it and then redirect to the users route where all the users will be found
} catch(error) {
    res.status(400).json({error: error.message })
}
}

async function getUsers(req,res){
    try{
        const users= await User.find({});
        res.status(200).json(users);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function createUser(req,res){
    try{
        const user= await User.create(req.body);
        res.status(201).json(user);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function renderNewForm(req,res) {
    try{
        res.render('./users/new.ejs');
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function deleteUser(req,res){
        try{
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            res.status(301).redirect('/users');
        }catch(error){
            res.status(400).json({error: error.message});
        }
}

async function updateUser(req,res){
    try{
        const updateUser= await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(301).redirect('/users');
    }catch(error){
        res.status(400).json({error: error.message});
    }
    }

    async function getUser(req,res){
        try{
            const getUser= await User.findById(req.params.id);
            res.status(200).json(getUser);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }


export{
    seedUsers,
    getUsers,
    createUser,
    renderNewForm,
    deleteUser,
    updateUser,
    getUser, 
}