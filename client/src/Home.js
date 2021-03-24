import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
//import Formdata from './components/NewForm';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import FormExample from './components/validateForm'
//import memories from './images/memories.png';
import 'bootstrap/dist/css/bootstrap.css'
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">BIO DATA</Typography>
        <img className={classes.image}  alt="icon" height="60" />
      </AppBar>

        <div>
         <div>
             <Posts  />

           </div>         
           <div>
           <FormExample  />

           </div>
        </div>

    </div>
  );
};

export default Home;


// {
//   <Grid container justify="space-between" alignItems="stretch" spacing={1}>
//   <Grid item xs={12} sm={12}>
//     <Posts setCurrentId={setCurrentId} />
//   </Grid>
//   </Grid>
//   <Grid>
//   <Grid item xs={12} sm={4}>
//     <Form currentId={currentId} setCurrentId={setCurrentId} />
//   </Grid>
// </Grid>
// }