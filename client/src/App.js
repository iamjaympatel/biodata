import logo from './logo.svg';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import './App.css';
import Formdata from './components/Form'
import UpdateData from './components/UpdateBio'

import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
 

      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/post/edit/:id" component={UpdateData} />
        <Route  path="/post/:id"component= {Formdata}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
