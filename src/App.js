import React, { Component } from 'react';
import MainNavBar from './components/MainNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavBar brandName="CSCI 4140"/>
        <div className="container" />

      </div>
    );
  }
}

export default App;
