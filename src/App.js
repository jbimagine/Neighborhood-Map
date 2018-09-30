import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Map from './components/Map'
import './App.css';


class App extends Component {

  componentDidMount (){
    document.body.classList.add('map-body')
  }

  componentWillUnmount (){
    document.body.classList.remove('map-body')
  }

  render() {
    return (
      <div>
      <Navigation/>
      <Map/>
      </div>

    );
  }
}

export default App;
