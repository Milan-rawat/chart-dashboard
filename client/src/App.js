import React, { Component } from "react";
import "./App.css";

import RadarChart from "./components/Chart";
import List from "./components/List";
import Foot from "./components/Foot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      isLoaded: false,
    };
  }

  componentDidMount = async () => {
    const res = await fetch("http://localhost:8000/api/jsondata", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({
      //   get: "allData",
      // }),
    });
    const response = JSON.parse(await res.text());
    this.setState({
      isLoaded: true,
      allData: response.data.allData,
    });
  };
  render() {
    const { allData, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div className="appLoading">
          <span>Loading ...</span>
        </div>
      );
    } else {
      return (
        <>
          <div>
            <RadarChart allData={allData} />
            <List allData={allData} />
            <Foot />
          </div>
        </>
      );
    }
  }
}

export default App;
