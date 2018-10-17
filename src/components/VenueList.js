import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';


class VenueList extends Component {
  render() {
    return (
     <div aria-label = 'venue list' role = 'Listitem' className = 'venue-list'>
       {this.props.venues && this.props.venues.map((venue,idx)=>(
           <ListItem key={idx} {...venue}
           handleListItemClick ={this.props.handleListItemClick}/>
       ))}
     </div>
    );
  }
}

export default VenueList;