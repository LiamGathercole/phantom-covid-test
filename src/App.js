import React from "react";
import { readRemoteFile } from "react-papaparse";

import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
