import {FETCH_ONE, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const initialstate={
  posts:[],
  post:{},
  error:{},
  loading:false,
}

 const postreducer = (state=initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {...state,posts:action.payload}
    case FETCH_ONE:
        return {...state,post:action.payload}
    case CREATE:
      return {   ...state,posts:action.payload};
    case UPDATE:
      return {...state,posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))}
    case DELETE:
      return {...state,posts:state.posts.filter((post) => post._id !== action.payload)}
    default:
      return state;
  }
};

export default postreducer