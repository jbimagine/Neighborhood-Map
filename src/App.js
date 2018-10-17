import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Map from './components/Map'
import NeighborhoodApi from './components/NeighborhoodApi'
import Sidebar from'./components/Sidemenu';
import './App.css';


class App extends Component {
  state = {
    isMenuVisible: true,
    venues:[],
    markers:[],
    center:[],
    zoom:12,
    updateSuperState: obj => {
      this.setState(obj);
    }
  }

  componentDidMount (){
    document.body.classList.add('map-body')

    NeighborhoodApi.search({
      near: 'San Francisco, CA',
      query: 'food'
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat:venue.location.lat,
          lng:venue.location.lng,
          isOpen:false,
          isVisible:true,
          id: venue.id
        }
      });
      this.setState({ venues, center, markers })
    })

  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState( {markers: Object.assign(this.state.markers, markers)} )
  }

  handleMarkerClick = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState( {markers: Object.assign(this.state.markers, marker)} )

    const venue = this.state.venues.find(venue => venue.id === marker.id)
  

    NeighborhoodApi.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues:Object.assign(this.state.venues, newVenue)})
    })
  };

  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id)
    this.handleMarkerClick(marker);
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
        <Sidebar 
        {...this.state}
      handleListItemClick ={this.handleListItemClick}
      />
      <Navigation
      isMenuVisible = {this.state.isMenuVisible}
      handleMenuVisibility = {this.handleMenuVisibility}
      />
      <Map
      {...this.state}
      handleMarkerClick = {this.handleMarkerClick}
      />
      </div>

    );
  }
}

export default App;
