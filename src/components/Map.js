import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class Map extends Component {

  state = {
    venues:[]
  }

  componentDidMount(){
    this.getVenues();
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDiucAl8uSDKELoUW25LTlq7xU7DsGG2hY&callback=initMap")
    window.initMap = this.initMap;
  }

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: 'TWHL2R1LFV2US323VBSFT31HWQGVYFR4ASEDJXG3TGC5NTFM',
      client_secret: 'J34A3A4OEOROQ40CPNYZTUA1UPJ45ITU25TEMGJIJ4PQHJAV',
      query: 'food',
      near: 'San Francisco',
      v: '20180710'
    }
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues:response.data.response.groups[0].items}, this.renderMap())
      console.log(response.data.response.groups[0].items)
    })
    .catch(error => {
      console.log('ERROR!! ' + error)
    }) 
  }

  

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.761640, lng: -122.483890},
      zoom: 14,
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

    // Create an info window on the google map
    let infowindow = new window.google.maps.InfoWindow();


    this.state.venues.map(myVenue => {

      let contentString = `${myVenue.venue.name}`;

      // Create a marker on the google map
      let marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      });

    marker.addListener('click', function() {

      infowindow.setContent(contentString);

      infowindow.open(map, marker);
  });

    })    
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

let loadScript = (url) => {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Map;