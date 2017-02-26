import React from 'react';

import {GoogleApiWrapper, Map} from 'google-maps-react';


const MapContainer = () =>
    <div>
      MAP HERE
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'}/>

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>

    </div>
  ;


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAq2VdnJMLDgIN7n55Zk_RF0DALf7rOIgk'
})(MapContainer)

