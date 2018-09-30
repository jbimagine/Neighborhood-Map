import React, { Component } from 'react';
import '../App.css';
import close_icon from '../imgs/close_icon.svg'
import menu_icon from '../imgs/menu_icon.svg'
import Sidemenu from './Sidemenu';


class Navigation extends Component {

  state = {
    isMenuVisible: false,
    sideMenuPosition: '-200px'
  }

  handleMenuVisibility = () => {
    this.setState({isMenuVisible: !this.state.isMenuVisible})
  }

  render() {
    return (
      <div>
        <div style = {{ padding:'0 20px', background: 'black', height: '60px' }} >
          <div id='navigation-container'>
          <div id = 'navigation-title'>
          <h2>Neighborhood Map</h2>
          </div> 
            <div  style = {{ cursor:'pointer' }} onClick={() => this.handleMenuVisibility()} >
            {
              this.state.isMenuVisible? < img style = {{height: '18px'}} src = {close_icon} alt = {'menu close icon'}/>:< img style = {{height: '18px'}} src = {menu_icon} alt = {'menu open icon'}/>
            }
            </div>
          </div>

        </div>
        {
          this.state.isMenuVisible?<Sidemenu/>:null
        }
        </div>
    );
  }
}

export default Navigation;