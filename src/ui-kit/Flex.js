import React, { Component } from 'react';
import '../App.css';


const sx = {
    flexContainer:{
      display: 'flex',
    }
}
class Flex extends Component {

 

  render() {
    return (
      <div style = {sx.flexContainer} >
       <div></div>
      </div>
    );
  }
}

export default Flex;