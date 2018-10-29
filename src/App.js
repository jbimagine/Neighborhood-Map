import React, { Component } from 'react';
import './App.css';
import { load_google_maps, load_places } from './utils';
import Navigation from './components/Navigation';
import Sidemenu from './components/Sidemenu';

class App extends Component {
  state = {
    query:'',
    isMenuVisible:true,
    error:false
  }

  componentDidMount() {
    
    let googleMapsPromise = load_google_maps();
    let placesPromise = load_places();

    Promise.all([
      googleMapsPromise,
      placesPromise,
    ])
    .then(values => {
      let google = values[0];
      this.venues = values[1].response.venues;
      this.google = google;
      this.markers = [];
      this.infowindow = new google.maps.InfoWindow();
      this.map = new google.maps.Map(document.getElementById('map'), {
        
        // Set the initial settings for the google map
        zoom:16,
        scrollwheel:true,
        center: { lat: this.venues[0].location.lat, lng: this.venues[0].location.lng },
        mapTypeControl: true,	
        mapTypeControlOptions: {	
            style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,	
            position: window.google.maps.ControlPosition.BOTTOM_CENTER	
        },	
        zoomControl: true,	
        zoomControlOptions: {	
            position: window.google.maps.ControlPosition.RIGHT_CENTER	
        },	
        scaleControl: true,	
        streetViewControl: true,	
        streetViewControlOptions: {	
            position: window.google.maps.ControlPosition.RIGHT_BOTTOM	
        },	
        fullscreenControl: false
      }); 

      this.venues.forEach(venue => {
        let marker = new google.maps.Marker({
          position: { lat:venue.location.lat, lng: venue.location.lng },
          map: this.map,
          venue: venue,
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP
        });

        // Handle the position of the map when marker is clicked
        marker.addListener('click', () => {
          if (marker.getAnimation() !== null) { marker.setAnimation(null); }
				  else { marker.setAnimation(google.maps.Animation.BOUNCE); }
				  setTimeout(() => { marker.setAnimation(null) }, 1500);
			  });
        google.maps.event.addListener(marker, 'click', () => {
          let streetAddress = marker.venue.location.formattedAddress[0];
          let cityStateZip = marker.venue.location.formattedAddress[1];
          let country = marker.venue.location.formattedAddress[2];

          this.handleFilterLocation = ()=> {
            return `<div class><div>${marker.name}</div><br/>${streetAddress}<br/>${cityStateZip}<br/>${country}</div>`;
          }
          
  			   this.infowindow.setContent(this.handleFilterLocation());
				   this.map.setCenter(marker.position);
				   this.infowindow.open(this.map, marker);
				   this.map.panBy(0, -125);
			  });

        this.markers.push(marker);
      });
      this.setState({ filteredVenues:this.venues });
    }).catch(()=> {
      alert('the venues are not available at this time, please try refreshing the page')
      this.setState({ error:true })
    })
  }

  filterVenues = (query) => {
    let filter = this.venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));

    this.markers.forEach(marker => {
      marker.name.toLowerCase().includes(query.toLowerCase())===true?
      marker.setVisible(true):
      marker.setVisible(false);
    })
     this.setState({ filteredVenues : filter, query })
  }

 
  handleListItemClick = (venue) => {
          let streetAddress = venue.location.formattedAddress[0];
          let cityStateZip = venue.location.formattedAddress[1];
          let country = venue.location.formattedAddress[2];

          let handleFilterLocation = ()=> {
            return `<div class><div>${marker.name}</div><br/>${streetAddress}<br/>${cityStateZip}<br/>${country}</div>`;
          }
    let marker = this.markers.filter(marker => marker.id ===venue.id)[0];
    this.infowindow.setContent(handleFilterLocation());
    this.map.setCenter(marker.position);
    this.infowindow.open(this.map, marker);
    this.map.panBy(0, -125);
    if (marker.getAnimation() !== null) { marker.setAnimation(null); }
				  else { marker.setAnimation(this.google.maps.Animation.BOUNCE); }
          setTimeout(() => { marker.setAnimation(null) }, 1500);
          
  }
  
  handleMenuVisibility = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible })
  }

  render() {
    return (
      <div> 
      <Navigation
      isMenuVisible = { this.state.isMenuVisible }
      handleMenuVisibility = { this.handleMenuVisibility }
      />
      <Sidemenu
      {...this.state}
      handleListItemClick = { this.handleListItemClick }
      getFilterDetails = { this.getFilterDetails }
      />
      <div id="map"></div>
      </div>
    );
  }
}

export default App;
