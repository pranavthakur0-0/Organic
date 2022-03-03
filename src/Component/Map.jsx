import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 31.886182893117052,
      lng: 77.14564548921213
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '45vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBtAqDsLb4U34MRQG_g9J1yIVEeKLqM81w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
            <Marker key="marker_1"
            position={{
    lat: 59.955413,
    lng: 30.337844
}}

/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;