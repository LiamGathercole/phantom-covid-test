import React from "react";
import { readRemoteFile } from "react-papaparse";

import logo from "./assets/covid-logo.png";
import csvData from "./assets/phe_cases_london_boroughs.csv";
import "./App.css";

import Map from "./components/Map";
import DateSlider from "./components/DateSlider";

class App extends React.Component {
  constructor() {
    super();
    this.state = { dates: null, currentDate: null };
  }

  componentDidMount() {
    readRemoteFile(csvData, {
      header: true,
      complete: results => {
        const csvData = results.data;
        // remove header item
        csvData.pop();

        const dates = [...new Set(csvData.map(item => item.date))];

        this.setState({ dates, csvData });
      }
    });
  }

  updateDate = date => {
    this.setState({ currentDate: date });
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        {this.state.dates ? (
          <DateSlider
            class="date-slider"
            dates={this.state.dates}
            updateDate={this.updateDate}
          />
        ) : null}

        {this.state.csvData ? (
          <Map
            csvData={this.state.csvData}
            currentDate={this.state.currentDate}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
