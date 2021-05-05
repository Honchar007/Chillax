import React, { Component, useState } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from '../node_modules/react-google-maps/lib/index'
import Geocode from 'react-geocode'
Geocode.setApiKey('AIzaSyCXLr9NcpJc8iwk3psaHI3UJIcMMvBGO5k')
export class MapGo extends Component {
  state = {
    address: '',
    city: '',
    area: '',
    state: '',
    zoom: 15,
    height: 400,
    mapPosition: { lat: 0, lng: 0 },
    markerPoistion: { lat: 0, lng: 0 },
  }

  onMarkerDragEnd = async (event) => {
    let newLat = event.latLng.lat()
    let newLng = event.latLng.lng()
    Geocode.fromLatLng(newLat, newLng).then((response) => {
      console.log(response)
    })
    /* let response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${newLat}&longitude=${newLng}&localityLanguage=ru`
    )

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json()
      console.log(json)
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }*/
  }
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && (
            <Marker
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              position={{ lat: -34.397, lng: 150.644 }}
            >
              <InfoWindow>
                <div>hello</div>
              </InfoWindow>
            </Marker>
          )}
        </GoogleMap>
      ))
    )
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXLr9NcpJc8iwk3psaHI3UJIcMMvBGO5k&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MapGo
