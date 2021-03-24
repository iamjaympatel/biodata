import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
//import FileBase from 'react-file-base64';
//import DatePicker from 'react-bootstrap-date-picker'
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
//import DateTimeField from 'react-bootstrap-datetimepicker'
//import { DateTime } from 'react-datetime-bootstrap';
//import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const Form = ({ currentId, setCurrentId }) => {
  
//  const [postData, setPostData] = useState({ Name:'',Host:'',Username:'',password:'',Database:'',Table:'' });
const [postData, setPostData] = useState({ FirstName:'',LastName:'',Email:'',DateOfBirth:'',ShortBio:'' });

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({  FirstName:'',LastName:'',Email:'',DateOfBirth:'',Short_Bio:''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{"Enter biodata"}</Typography>
        <TextField name="FirstName" variant="outlined" label="FirstName" fullWidth value={postData.FirstName} onChange={(e) => setPostData({ ...postData, FirstName: e.target.value })} />
        <TextField name="LastName" variant="outlined" label="LastName" fullWidth value={postData.LastName} onChange={(e) => setPostData({ ...postData, LastName: e.target.value })} />
        <TextField name="email" 
        hintText="email"
        type="email"
         variant="outlined" label="Eamil" fullWidth value={postData.Email} onChange={(e) => setPostData({ ...postData, Email: e.target.value })} />
        <TextField name="Short_bio" variant="outlined" label="Short_bio" fullWidth value={postData.ShortBio} onChange={(e) => setPostData({ ...postData, ShortBio: e .target.value})} />
        <div className='App'style={{"height":"4rem","width":"12rem"}} >
        <DatePicker dateFormat='dd/mm/yyyy'   selected={postData.DateOfBirth} placeholderText="enter birth date" format="dd-MMM-yy" onChange={date => setPostData({...postData,DateOfBirth:date})} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

// {
// <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
// <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
// <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
// <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
// }