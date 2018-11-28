import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from './Posts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/posts' component={Posts}/>
          </Switch>
      </div>
    );
  }
}

export default App;
