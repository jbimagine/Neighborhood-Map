import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Map from './components/Map'
import './App.css';


class App extends Component {
  state = {
    isMenuVisible: false,
  }

  componentDidMount (){
    document.body.classList.add('map-body')
  }

  componentWillUnmount (){
    document.body.classList.remove('map-body')
  }

  handleMenuVisibility = () => {
    this.setState({isMenuVisible: !this.state.isMenuVisible})
  }

  render() {
    return (
      <div>
      <Navigation
      isMenuVisible = {this.state.isMenuVisible}
      handleMenuVisibility = {this.handleMenuVisibility}
      />
      <Map/>
      </div>

    );
  }
}

export default App;
