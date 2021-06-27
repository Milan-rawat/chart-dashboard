import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./css/Chart.css";


class RadarChart extends Component {
  constructor(props) {
    super(props);

    this.filters = ["topic", "sector", "region", "pestle", "country"];
    this.refine = ["intensity", "likelihood", "relevance"];
    this.charts = ["radar", "bar", "area", "line"];
    this.state = {
      X: [],
      Y: [],
      chartType: "radar",
      allData: this.props.allData,
      filterdata: "topic",
      refinedata: "intensity",

      options: {
        chart: {
          id: "basic-radar",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "intensity",
          data: [],
        },
      ],
    };
    this.changeFilter(this.state.filterdata, this.state.refinedata);
  }

  changeFilter = async (filter, refine) => {
    if (filter) {
      await this.setState({
        filterdata: filter,
      });
    }
    if (refine) {
      await this.setState({
        refinedata: refine,
      });
    }

    let data = [];
    let newData = [];
    let uniqObj = {};
    let objSect;
    data = [...this.state.allData];
    for (let i in data) {
      objSect = data[i][this.state.filterdata];
      uniqObj[objSect] = data[i];
    }
    for (let i in uniqObj) {
      newData.push(uniqObj[i]);
    }

    if (this.state.filterdata === "topic")
      this.state.X = newData.map((data) => data.topic);
    if (this.state.filterdata === "sector")
      this.state.X = newData.map((data) => data.sector);
    if (this.state.filterdata === "region")
      this.state.X = newData.map((data) => data.region);
    if (this.state.filterdata === "pestle")
      this.state.X = newData.map((data) => data.pestle);
    if (this.state.filterdata === "country")
      this.state.X = newData.map((data) => data.country);

    if (this.state.refinedata === "intensity")
      this.state.Y = newData.map((data) => 
        (data.intensity === null) ? "0" : data.intensity
      );
    if (this.state.refinedata === "likelihood")
      this.state.Y = newData.map((data) => 
        (data.likelihood === null) ? "0" : data.likelihood
      );
    if (this.state.refinedata === "relevance")
      this.state.Y = newData.map((data) => 
        (data.relevance === null) ? "0" : data.relevance
      );

    this.setState({
      options: {
        chart: {
          id: "basic-radar",
        },
        xaxis: {
          categories: this.state.X,
        },
      },
    });
    this.setState({
      series: [
        {
          name: "intensity",
          data: this.state.Y,
        },
      ],
    });
  };

  changeChart = async (chart) => {
    await this.setState({
      chartType: chart
    })
  }

  render() {
    const radarChart = <Chart
    style={{display: (this.state.chartType === "radar" ? "block" : "none")}}
    className="Charts"
    options={this.state.options}
    series={this.state.series}
    type="radar"
    width="1150"
  />

  const barChart = <Chart
  style={{display: (this.state.chartType === "bar" ? "block" : "none")}}
    className="Charts"
    options={this.state.options}
    series={this.state.series}
    type="bar"
    width="1150"
  />

  const lineChart = <Chart
  style={{display: (this.state.chartType === "line" ? "block" : "none")}}
    className="Charts"
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="1150"
  />

  const areaChart = <Chart
  style={{display: (this.state.chartType === "area" ? "block" : "none")}}
    className="Charts"
    options={this.state.options}
    series={this.state.series}
    type="area"
    width="1150"
  />

    return (
      <>
        <div className="chartApp">
          {radarChart}
          {barChart}
          {areaChart}
          {lineChart}
          <div className="dashboardOptions">
            <div className="filters">
              <span id="filterHeading">FILTERS</span>
              {this.filters.map((filter, index) => (
                <div className="filterOptions" key={index}>
                  <label>
                    <input
                      onChange={() => this.changeFilter(filter, false)}
                      type="radio"
                      value={filter}
                      name="filter"
                      checked={this.state.filterdata === filter}
                    />
                    {filter}
                  </label>
                </div>
              ))}
            </div>
            <div className="filters">
              <span id="filterHeading">DATA</span>
              {this.refine.map((refine, index) => (
                <div className="filterOptions" key={index}>
                  <label>
                    <input
                      onChange={() => this.changeFilter(false, refine)}
                      type="radio"
                      value={refine}
                      name="refine"
                      checked={this.state.refinedata === refine}
                    />
                    {refine}
                  </label>
                </div>
              ))}
            </div>
            <div className="filters">
              <span id="filterHeading">CHARTS</span>
              {this.charts.map((chart, index) => (
                <div className="filterOptions" key={index}>
                  <label>
                    <input
                      onChange={() => this.changeChart(chart)}
                      type="radio"
                      value={chart}
                      name="chart"
                      checked={this.state.chartType === chart}
                    />
                    {chart}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RadarChart;
