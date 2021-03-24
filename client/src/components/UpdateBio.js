
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from './Edit/FormContainer'
import { createPost, updatePost,getPost } from '../actions/posts';




 const Formdata =(props) => {
  
 const currentId=props.match.params.id
  const [postData, setPostData] = useState({ FirstName:'',LastName:'',Email:'',DateOfBirth:'',ShortBio:'' });
  const post = useSelector((state) =>state.posts.post );
  //const data=post.find((p)=>p._id===currentId)
  const dispatch = useDispatch();

  useEffect(() => {

    if(post)
    setPostData(post);
  }, [post]);
  

  if(!post.FirstName){
    dispatch(getPost(currentId))
    
      }

  const clear = () => {
  
    setPostData({FirstName:'',LastName:'',Email:'',DateOfBirth:'',ShortBio:''  });
  };

  console.log(postData.DateOfBirth)
  const handleSubmit = async (e) => {
    e.preventDefault();

      dispatch(updatePost(currentId, postData));
     props.history.push('/')
  };

  return (
    <>
     <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>view Biodata</h1>
    
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={postData.FirstName} onChange={(e) => setPostData({ ...postData, FirstName: e.target.value })}  ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter LastName'
                value={postData.LastName} 
                onChange={(e) => setPostData({ ...postData, LastName: e.target.value })}></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={postData.Email}
                onChange={(e) => setPostData({ ...postData, Email: e.target.value })}
              ></Form.Control>
            </Form.Group>

        

            <Form.Group controlId='category'>
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Birth date'
                value={postData.DateOfBirth}
                //onChange={(e) => setPostData({ ...postData, DateOfBirth: e.target.value })}
              ></Form.Control>
                 <Form.Control
                type='date'
                placeholder='Enter Birth date'
                value={postData.DateOfBirth}
                onChange={(e) => setPostData({ ...postData, DateOfBirth: e.target.value })}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='Short Bio'>
              <Form.Label>Short Bio</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Biodata'

                value={postData.ShortBio}
                onChange={(e) => setPostData({ ...postData, ShortBio: e.target.value })}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
    
      </FormContainer>
      </>
  )
}

export default Formdata