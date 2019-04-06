import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarContainer from './containers/AvatarContainer';
import test from './components/testComponent';

class App extends Component {
  render() {
    return (
      <AvatarContainer AvatarComponent={test}/>
    );
  }
}

//visible observible streams on ui. has normal speed and rewind. 
//visible observible stream has a rate scaler
export default App;
