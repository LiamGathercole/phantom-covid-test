import React from "react";
import { readRemoteFile } from "react-papaparse";

import logo from "./logo.svg";
import csvData from "./phe_cases_london_boroughs.csv";
import "./App.css";

import Map from "./components/Map";
import DateSlider from "./components/DateSlider";

class App extends React.Component {
  constructor() {
    super();
    this.state = { dates: null, currentDate: 1 };
  }

  componentDidMount() {
    readRemoteFile(csvData, {
      header: true,
      complete: results => {
        console.log("Results:", results);
        const csvData = results.data;
        const dates = [...new Set(csvData.map(item => item.date))];

        this.setState({ dates, csvData });
        console.log(dates);
      }
    });
  }

  updateDate = date => {
    console.log("Update date", date);
    this.setState({ currentDate: date });
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        {this.state.dates ? (
          <DateSlider dates={this.state.dates} updateDate={this.updateDate} />
        ) : null}

        {this.state.csvData && this.state.currentDate ? (
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
