const mongoose =require('mongoose');


const postSchema = mongoose.Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    DateOfBirth:{
        type:Date,
        require:true
    },
    ShortBio:{
        type:String,
        require:true,
    }
})

var Post = mongoose.model('Post', postSchema);

module.exports= Post;