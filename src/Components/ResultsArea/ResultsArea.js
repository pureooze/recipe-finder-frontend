import React, { Component } from "react";
import Result from "./Result";
import Settings from "../Settings/Settings";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

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
        <div className="Results-Area">
          {this.props.results.length > 0 && (
            <GridList style={{ width: "100%", height: "100%" }} cols={2}>
              <GridListTile
                key="Subheader"
                cols={1}
                style={{
                  backgroundColor: "#263238",
                  color: "white",
                  height: "50px",
                  width: "100%"
                }}
              >
                <ListSubheader color="inherit" component="div">
                  <h3 style={{ marginTop: "0px" }}>Results</h3>
                </ListSubheader>
              </GridListTile>
              {this.props.results.map(result => (
                // <li style={{ float: "left", margin: "20px" }}>
                //   <Result result={result} />
                // </li>
                <Result result={result} />
              ))}
            </GridList>
          )}
          {this.props.results.length === 0 && (
            <div className="no-results">
              <b>
                No results found. Please try different filters or search term.
              </b>
            </div>
          )}
        </div>
        {/* </ul>
        </div> */}
      </div>
    );
  }
}

export default ResultsArea;
