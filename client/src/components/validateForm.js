import { Form, Button,InputGroup,Col } from 'react-bootstrap'
import {Formik,useFormik} from 'formik'
import * as yup from 'yup';
import React, { useState, useEffect } from 'react'
import FormContainer from './Edit/FormContainer'

import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../actions/posts';

import {
  validateEmail,
  validateFullName,
  validateUsername,
  validatePassword,
} from '../utils/validation';



function FormExample() {
  const [postData, setPostData] = useState({ FirstName:'',LastName:'',Email:'',DateOfBirth:'',ShortBio:'' });
  const dispatch = useDispatch();

  const errors = {};
  
  const validate = () => {
    const emailError = validateEmail(postData.Email);
      errors.Email = emailError;
      
    const FirstNameError = validateFullName(postData.FirstName);
      errors.FirstName = FirstNameError;

    const LastNameError = validateFullName(postData.LastName);
     errors.LastName = LastNameError;

  };
validate()

useEffect(()=>{

},[errors])
const handleSubmit = async (e) => {
  e.preventDefault();
    dispatch(createPost(postData))
  
};

  return (
    <Formik
    validationSchema={validate}
    onSubmit={console.log}
    initialValues={postData}
  
  >
          <FormContainer>
        <Form noValidate onSubmit={handleSubmit} >
        
          <Form.Group controlId='name'>
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={postData.FirstName} onChange={(e) => setPostData({ ...postData, FirstName: e.target.value })}
                isInvalid={errors.FirstName}
                ></Form.Control>
                    <Form.Control.Feedback type="invalid">
              {errors.FirstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter LastName'
                value={postData.LastName} 
                onChange={(e) => setPostData({ ...postData, LastName: e.target.value })}
                isInvalid={errors.LastName}
                ></Form.Control>
            
            <Form.Control.Feedback type="invalid">
              {errors.LastName}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group controlId='image'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Email'
                value={postData.Email}
                onChange={(e) => setPostData({ ...postData, Email: e.target.value })}
                isInvalid={errors.Email}
              ></Form.Control>
               <Form.Control.Feedback type="invalid">
              {errors.Email}
              </Form.Control.Feedback>
            </Form.Group>

        

            <Form.Group controlId='category'>
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type='date'
                placeholder='Enter Birth date'
                value={postData.DateOfBirth.slice(0,10)}
                onChange={(e) => setPostData({ ...postData, DateOfBirth: e.target.value })}
              // isInvalid={!!errors.lastName}

              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='Short Bio'>
              <Form.Label>Short Bio</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Biodata'
                style={{"height":"10rem"}}
                value={postData.ShortBio}
                onChange={(e) => setPostData({ ...postData, ShortBio: e.target.value })}
              ></Form.Control>
            </Form.Group>

          <Button type="submit" disabled={(errors.Email || errors.FirstName || errors.LastName)? true:false}>Submit form</Button>
        </Form>
    
        </FormContainer>

    </Formik>
  );
}

export default FormExample


// {
//     <Form.Group>
//             <Form.File
//               className="position-relative"
//               required
//               name="file"
//               label="File"
//               onChange={handleChange}
//               isInvalid={!!errors.file}
//               feedback={errors.file}
//               id="validationFormik107"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               id="validationFormik106"
//               feedbackTooltip
//             />
//           </Form.Group>
// }