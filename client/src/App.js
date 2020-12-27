import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Home from './Components/Home.js';

class App extends Component {
  state = {
    response: {}
  };

  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
      // <div className="App">
      //   <h1>Here is our new feature!</h1>
      //   <h1>{this.state.response.body}</h1>
      // </div>
    );
  }
}

export default App;
