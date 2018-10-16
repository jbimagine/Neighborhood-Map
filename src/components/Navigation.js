import React, { Component } from 'react';
import '../App.css';
import close_icon from '../imgs/close_icon.svg'
import menu_icon from '../imgs/menu_icon.svg'


class Navigation extends Component {

  render() {
    const { isMenuVisible, handleMenuVisibility } =this.props;
    
    return (
      <div>
        <div style = {{ height: '60px', margin: '10px 0', zIndex:'2', width:'100%', position:'fixed', display: 'flex', justifyContent:'center' }} >
          <div id='navigation-container'>
          <div id = 'navigation-title'>
          <h2>Neighborhood Map</h2>
          </div> 
            <div  style = {{ cursor:'pointer', padding:'20px' }} onClick={() => handleMenuVisibility()} >
            {
              isMenuVisible? < img style = {{height: '18px'}} src = {close_icon} alt = {'menu close icon'}/>:< img style = {{height: '18px'}} src = {menu_icon} alt = {'menu open icon'}/>
            }
            </div>
          </div>

        </div>
        
        </div>
    );
  }
}

export default Navigation;