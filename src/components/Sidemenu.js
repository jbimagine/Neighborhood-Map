import React, { Component } from 'react';
import '../App.css';


class Sidemenu extends Component {
  render() {
    const { isMenuVisible } =this.props;

    return (
      <div>
       
          <div id = 'sidemenu-container'style = {isMenuVisible?{left: '0px', transitionDuration: '0.5s'}:{left: '-375px', transitionDuration: '0.5s'}}>
            <div></div>
          </div>
       
      </div>
    );
  }
}

export default Sidemenu;