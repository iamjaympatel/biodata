import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH_ONE } from '../constants/actionTypes';
import axios from 'axios';


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get( 'http://localhost:5000/api/posts');
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (Postid) => async (dispatch) => {
  try {
 
const { data } = await axios.get(`http://localhost:5000/api/posts/${Postid}`);
    console.log(data);
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/posts', post)

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`http://localhost:5000/api/posts/${id}`, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`http://localhost:5000/api/posts/${id}`)

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await  axios.delete(`http://localhost:5000/api/posts/${id}`);;

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
