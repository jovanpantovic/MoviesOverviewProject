import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieBuilder from '../src/containers/MovieBuilder';
import Form from '../src/containers/Form/Form';
import RegisterForm from '../src/containers/Form/RegisterForm';

  class App extends Component {
    render () {
      return (
        <BrowserRouter>
        <div className="App">
          
            <Switch>
              <Route exact path="/" component={RegisterForm}/>
              <Route exact path="/login" component={Form}/>
              <Route path="/movies" component={MovieBuilder}/>
            </Switch>
          </div>
          
        </BrowserRouter>
      );
    }
  }

export default App;
