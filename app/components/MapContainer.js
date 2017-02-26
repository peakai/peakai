import React from 'react';

import Map from 'google-maps-react'


AIzaSyAq2VdnJMLDgIN7n55Zk_RF0DALf7rOIgk


const Map = () =>
  <div>

    <Map google={this.props.google} zoom={14}>

      <Marker onClick={this.onMarkerClick}
              name={'Current location'}/>

      <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>

  </div>;

export MapContainer;