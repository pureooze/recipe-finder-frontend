import React, { Component } from "react";
import Result from "./Result";
import Settings from "../Settings/Settings";

class ResultsArea extends Component {
  render() {
    console.log("Res: ", this.props.results);
    return (
      <div className="Results-Wrapper">
        {this.props.results.length !== 0 && <Settings className="settings" />}
        <div className="Results-Area">
          <ul
            style={{
              listStyleType: "none",
              listStyleImage: "none"
            }}
          >
            {this.props.results.length > 0 &&
              this.props.results.map(result => (
                <li style={{ float: "left", margin: "20px" }}>
                  <Result result={result} />
                </li>
              ))}
            {this.props.results.length === 0 && (
              <b>
                No results found. Please try different filters or search term.
              </b>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ResultsArea;
