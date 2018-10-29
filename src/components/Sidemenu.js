import React, { Component } from 'react';
import '../App.css';
import VenueList from './VenueList';

class Sidemenu extends Component {

    render(){
        const { isMenuVisible, query } = this.props;
        return (
            <div id = 'sidemenu-container'style = {isMenuVisible?{left: '0px', transitionDuration: '0.5s'}:{left: '-375px', transitionDuration: '0.5s'}}>
          <div style = {{ width: '100%', overflowY:'scroll' }}>
          <form id = 'sidemenu-form' >
            <label style = {{width: '80%', display:'flex'}}>
              <input 
              aria-label = 'Filter venue list' 
              role ='search' id = 'sidemenu-search-box' 
              type="text" name="name" 
              placeholder = "Filter Venues" 
              value = {query} 
              onChange = {(e)=>{this.filterVenues(e.target.value)}} 
              />
            </label>
          </form>
          <div id = 'sidemenu-content-container'>  
           <VenueList
           { ...this.props }
           />
            </div>
          </div>
          </div>
        )
    }
}
export default Sidemenu;
