import React from "react";
import GoogleMapReact from "google-map-react";

import MapStyle from "../assets/mapStyle";
import LondonBoroughs from "../assets/london_boroughs";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class Map extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static defaultProps = {
    center: {
      lat: 51.506811,
      lng: -0.117133,
    },
    zoom: 10,
  };

  componentDidMount() { }

  handleApiLoaded(map) {
    console.log(map);
    map.data.addGeoJson(LondonBoroughs);
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          position: "absolute",
          top: "0",
          height: "100vh",
          width: "100%",
          zIndex: "1",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ styles: MapStyle.styles, fullscreenControl: false }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Map;
