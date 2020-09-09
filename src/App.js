import React from "react";
import { readRemoteFile } from "react-papaparse";

import logo from "./logo.svg";
import csvData from "./phe_cases_london_boroughs.csv";
import "./App.css";

import Map from "./components/Map";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    readRemoteFile(csvData, {
      header: true,
      complete: (results) => {
        console.log("Results:", results);
      },
    });
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Map />
      </div>
    );
  }
}

export default App;
