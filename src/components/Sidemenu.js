import React, { Component } from 'react';
import '../App.css';


class Sidemenu extends Component {
  render() {
    const { isMenuVisible } =this.props;

    return (
      <div>
       
          <div id = 'sidemenu-container'style = {isMenuVisible?{left: '0px', transitionDuration: '0.5s'}:{left: '-375px', transitionDuration: '0.5s'}}>
          <form id = 'sidemenu-form' >
            <label style = {{width: '80%', display:'flex'}}>
            
              <input id = 'sidemenu-search-box' type="text" name="name"/>
            </label>
          </form>
          </div>
       
      </div>
    );
  }
}

export default Sidemenu;