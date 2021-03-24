import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';




const Table2 = () => {
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    loadUsers();
  }, []);
  
  
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
  //  setUser(result.data.reverse());
  };


  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Eamil</th>
              <th scope="col">DateOfBirth</th>
              <th scope="col">ShortBIo</th>
              <th scope="col">view</th>
              <th scope="col">edit</th>
              <th scope="col">delete</th>

             
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post._id}>
                <th scope="row">{index + 1}</th>
                <td>{post.FirstName}</td>
                <td>{post.LastName}</td>
                <td>{post.Email}</td>
                <td>{post.DateOfBirth}</td>
                <td>{post.ShortBio}</td>
                <td>
                <Link class="btn btn-primary mr-2" to={`/post/${post._id}`}>
                    View
                  </Link>
                 
                  </td>                 
               
                  <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/post/edit/${post._id}`}
                  >
                    Edit
                  </Link>
                 </td>
                 <td>
                  <Button   class="btn btn-danger" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;