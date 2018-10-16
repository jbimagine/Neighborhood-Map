import React, { Component } from 'react';
import '../App.css';
import VenueList from './VenueList';


class Sidemenu extends Component {
  state = {
    query:''
  }

  handleFilterVenues = () => {
    if(this.state.query.trim() !== ''){
      const venues = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
      console.log(venues);
      return venues;
    }
    return this.props.venues;
  }

  handleChange = event => {
    this.setState({query: event.target.value});
    const markers = this.props.venues.map(venue=> {
      const isMatched = venue.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if(isMatched){
        marker.isVisible = true;
      }
      else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({markers});
  }
  render() {
    const { isMenuVisible } =this.props;

    return (
      <div>
       
          <div id = 'sidemenu-container'style = {isMenuVisible?{left: '0px', transitionDuration: '0.5s'}:{left: '-375px', transitionDuration: '0.5s'}} onChange ={this.handleChange}>
          <div style = {{ width: '100%' }}>
          <form id = 'sidemenu-form' >
            <label style = {{width: '80%', display:'flex'}}>
            
              <input id = 'sidemenu-search-box' type="text" name="name"/>
            </label>
          </form>
          <div id = 'sidemenu-content-container'>  
            <div id = 'sidemenu-content'>
            <VenueList
            {...this.props}
            venues = {this.handleFilterVenues()}
            handleListItemClick ={this.props.handleListItemClick}
            />
            </div>
          </div>
          </div>
          </div>
       
      </div>
    );
  }
}

export default Sidemenu;