const express =require( 'express');
const mongoose =require( 'mongoose');

const Post =require( '../models/post');

const router = express.Router();

 const getPosts = async (req, res) => { 
    try {
        const postMessages = await Post.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createPost = async (req, res) => {

   
   const {FirstName,LastName,Email, DateOfBirth,ShortBio}=req.body 
    const newPostMessage = new Post({FirstName,LastName,Email, DateOfBirth,ShortBio})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const updatePost = async (req, res) => {
    const { id } = req.params;
    //const {Name,Host,Username,password,Database,Table} = req.body;
   const {FirstName,LastName,Email, DateOfBirth,Short_Bio}=req.body 
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ,${id}`);

const updatedPost = {FirstName,LastName,Email, DateOfBirth,Short_Bio}


    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

 const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

module.exports={ getPosts, getPost, createPost, updatePost, deletePost }