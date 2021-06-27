import React, { Component } from "react";
import "./css/List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.listHead = [
      "title",
      "intensity",
      "likelihood",
      "relevance",
      "year",
      "country",
      "topics",
      "region",
      "city",
    ];
    this.img = ["📜", "💉", "🍷", "🤞", "⏳", "🗽", "📘", "✈", "🏙️"];
    this.state = {
      allData: this.props.allData,
      pageNo: 1,
      pageData: this.props.allData.slice(0, 10),
    };
  }

  changePage = async (pre, nxt) => {
    if (pre) await this.setState({ pageNo: this.state.pageNo - 1 });
    if (nxt) await this.setState({ pageNo: this.state.pageNo + 1 });
    let Datas = this.state.allData.slice(
      this.state.pageNo * 10 - 10,
      this.state.pageNo * 10
    );
    this.setState({
      pageData: Datas,
    });
  };

  render() {
    return (
      <div className="appList">
        <div className="listTable">
          <table>
            <thead>
              <tr>
                {this.listHead.map((heading, index) => (
                  <th key={index}>
                    {heading.toUpperCase()} {this.img[index]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.pageData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <a href={data.url}>{data.title ? data.title : "N/A"}</a>
                  </td>
                  <td>{data.intensity ? data.intensity : "N/A"}</td>
                  <td>{data.likelihood ? data.likelihood : "N/A"}</td>
                  <td>{data.relevance ? data.relevance : "N/A"}</td>
                  <td>{data.start_year ? data.start_year : "N/A"}</td>
                  <td>{data.country ? data.country : "N/A"}</td>
                  <td>{data.topic ? data.topic : "N/A"}</td>
                  <td>{data.region ? data.region : "N/A"}</td>
                  <td>{data.city ? data.city : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tableFoot">
          <div className="tableMessage">
            Showing results from {this.state.pageNo * 10 - 9} to{" "}
            {this.state.pageNo * 10}
          </div>
          <div className="tableButtons">
            <button
              onClick={() => this.changePage(true, false)}
              disabled={this.state.pageNo === 1}
            >
              pre
            </button>
            <button
              onClick={() => this.changePage(false, true)}
              disabled={this.state.pageNo >= this.state.allData.length / 10}
            >
              next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
