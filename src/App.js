import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Map from './components/Map'
import NeighborhoodApi from './components/NeighborhoodApi'
import './App.css';


class App extends Component {
  state = {
    isMenuVisible: false,
    venues:[],
    markers:[],
    center:[],
    zoom:12
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
      console.log(results);
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

    const venue = this.state.venues.find(venue => venue.id = marker.id)
  
    NeighborhoodApi.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues:Object.assign(this.state.venues, newVenue)})
      console.log(newVenue);

    })
  
  };

  componentWillUnmount (){
    document.body.classList.remove('map-body')
  }

  handleMenuVisibility = () => {
    this.setState({isMenuVisible: !this.state.isMenuVisible})
  }

  render() {
    return (
      <div>
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
