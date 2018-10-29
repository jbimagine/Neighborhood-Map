import React, { Component } from 'react';
import '../App.css';


class VenueList extends Component {
  render() {
    const { handleListItemClick, filteredVenues } = this.props;
    return (
      <div id = 'sidemenu-content'>
      {
        filteredVenues && filteredVenues.length > 0 && filteredVenues.map((venue, index)=> (
          <div key = {index} aria-label = {venue.name} role = 'list' className='list-item' onClick = {()=> { handleListItemClick(venue); }}>
             {venue.name}
          </div>
        ))
      }
          </div>
    );
  }
}

export default VenueList;