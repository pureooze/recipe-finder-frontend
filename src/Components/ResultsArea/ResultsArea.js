import React, { Component } from "react";
import Result from "./Result";
import Settings from "../Settings/Settings";
import GridList from "@material-ui/core/GridList";

class ResultsArea extends Component {
  render() {
    console.log("Res: ", this.props.results);
    return (
      <div className="Results-Wrapper">
        <Settings className="settings" />
        {/* <div className="Results-Area">
          <ul
            style={{
              listStyleType: "none",
              listStyleImage: "none"
            }}
          > */}
        <GridList cellHeight={160} cellWidth={100}>
          {this.props.results.length > 0 &&
            this.props.results.map(result => (
              // <li style={{ float: "left", margin: "20px" }}>
              //   <Result result={result} />
              // </li>
              <Result result={result} />
            ))}
          {this.props.results.length === 0 && (
            <b>
              No results found. Please try different filters or search term.
            </b>
          )}
        </GridList>
        {/* </ul>
        </div> */}
      </div>
    );
  }
}

export default ResultsArea;
