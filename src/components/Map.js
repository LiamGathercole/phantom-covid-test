import React from "react";
import GoogleMapReact from "google-map-react";

import MapStyle from "../assets/mapStyle";
import LondonBoroughs from "../assets/london_boroughs";

import "./Map.css";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      map: null
    };
  }
  static defaultProps = {
    center: {
      lat: 51.506811,
      lng: -0.117133
    },
    zoom: 10
  };

  componentDidMount() {
    //console.log(GOOGLE_MAPS_API_KEY);
  }

  componentDidUpdate() {
    let currentDay = this.props.currentDate;
    let currentDayData = this.props.csvData.filter(
      item => item.date === currentDay
    );
    let that = this;

    if (this.state.map) {
      this.state.map.data.setStyle(function (feature) {
        let borough = feature.getProperty("name");
        let boroughData = currentDayData.filter(
          item => item.area_name === borough
        );
        var color,
          opacity = null;

        if (boroughData[0]) {
          color = "red";
          opacity = boroughData[0] ? (boroughData[0].new_cases * 1.5) / 100 : 0;

          if (opacity < 0.3) {
            opacity = opacity * 1.5;
          }
        }
        return {
          fillColor: color,
          fillOpacity: opacity,
          strokeWeight: 0
        };
      });
    }
  }

  handleApiLoaded(map) {
    console.log(map);
    map.data.addGeoJson(LondonBoroughs);
    this.setState({ map });
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
          zIndex: "1"
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
