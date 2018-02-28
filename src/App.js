import React, { Component } from 'react';

import Board from './Board';

import './App.css';


class App extends Component {
  constructor() {
    super();    
  }


  render() {

    return (
      <div className="App-Container">
        <div className="App">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
