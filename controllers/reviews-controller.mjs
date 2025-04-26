//////Callback Functions File
import Review from '../models/reviews-model.mjs';

async function seedReviews(req,res) {
try{
   await Review.deleteMany({});
   await Review.create(
    {
    id:1 ,
    movieName:"Meet the Fockers" ,
    rating:"5/5",
    review:"Powder chupa chups pie liquorice brownie I love brownie. Cupcake I love sweet I love sesame snaps jujubes. Chocolate pudding sweet lemon drops shortbread brownie"
   },
   {id:2 ,
   movieName:"Unbreakable",
   rating:"4/5" ,
   review:"I love cotton candy chocolate bar tiramisu sesame snaps soufflé cotton candy brownie chocolate bar. I love marshmallow gummi bears ice cream biscuit jujubes ice cream sweet. I love sesame snaps dragée cookie brownie I love powder cotton candy." 
   },
   {id:3 ,
    movieName:"Man on Fire",
    rating:"5/5" ,
    review:"Apple pie muffin I love danish macaroon sweet roll. Powder biscuit jelly beans oat cake lollipop. Cupcake toffee muffin lollipop bear claw caramels."
   },
   {id:4,
    movieName:"Waiting to Exhale" ,
    rating:"4/5" ,
    review:"Cheesecake gummies chocolate halvah pastry. Jujubes jelly beans pudding dessert I love sweet roll brownie. Jelly sweet icing sweet chocolate marshmallow tootsie roll fruitcake sesame snaps. Gummi bears halvah shortbread dragée gummi bears."
   }
)

res.status(201).redirect('/reviews'); //means create it and then redirect to the users route where all the users will be found
} catch(error) {
    res.status(400).json({error: error.message })
}
}

async function getReviews(req,res){
    try{
        const reviews= await Review.find({});
        res.status(200).json(reviews);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function createReview(req,res){
    try{
        const review= await Review.create(req.body);
        res.status(201).json(review);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

async function deleteReview(req,res){
        try{
            const deleteReview = await Review.findByIdAndDelete(req.params.id);
            res.status(301).redirect('/reviews');
        }catch(error){
            res.status(400).json({error: error.message});
        }
}

async function updateReview(req,res){
    try{
        const updateReview= await Review.findByIdAndUpdate(req.params.id,req.body);
        res.status(301).redirect('/reviews');
    }catch(error){
        res.status(400).json({error: error.message});
    }
    }

    async function getReview(req,res){
        try{
            const getReview= await Review.findById(req.params.id);
            res.status(200).json(getReview);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }


export{
    seedReviews,
    getReviews,
    createReview,
    deleteReview,
    updateReview,
    getReview, 
 }