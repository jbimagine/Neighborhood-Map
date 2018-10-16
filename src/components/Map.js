import React, { Component } from 'react';
import '../App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
    defaultZoom = {14}
    zoom = {props.zoom}
    defaultCenter={{ lat: 37.761640, lng: -122.483890 }}
    center = { props.center }
    >
    { props.markers &&
      props.markers.filter(marker => marker.isVisible).map(( marker, idx ) => {
        const venueInfo = props.venues.find(venue =>  venue.id === marker.id);
        return (
         <Marker 
            key={idx} 
            position= {{ lat: marker.lat, lng: marker.lng }} 
            onClick = {() => props.handleMarkerClick(marker) }
            >
          {marker.isOpen && 
            venueInfo.bestPhoto && (
            <InfoWindow>
              <React.Fragment>
                <div style = {{display: 'flex', flexDirerction: 'column', paddingTop: '20px', paddingLeft: '25px'}}>
                <img
                  src = {`${venueInfo.bestPhoto.prefix}200x200${
                    venueInfo.bestPhoto.suffix
                    }`}
                     alt ={'Venue'}
                     />
                </div>
              <p style = {{ display:'flex', justifyContent:'center' }}>{venueInfo.name}</p>
              </React.Fragment>
            </InfoWindow>
          )}
        </Marker>
      );
      })}

    </GoogleMap>
  ))
)



class Map extends Component {

  render() {
    return (
      <main>
        <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDiucAl8uSDKELoUW25LTlq7xU7DsGG2hY"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
      </main>
    );
  }
}


export default Map;