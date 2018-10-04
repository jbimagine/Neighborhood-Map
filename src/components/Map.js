import React, { Component } from 'react';
import '../App.css';


class Map extends Component {

  componentDidMount(){
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDiucAl8uSDKELoUW25LTlq7xU7DsGG2hY&callback=initMap")
    window.initMap = this.initMap;
  }

  initMap = () => {
    new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.761640, lng: -122.483890},
      zoom: 15,
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