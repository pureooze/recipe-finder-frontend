import React, { Component } from "react";
import Result from "./Result";
import Settings from "../Settings/Settings";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import CircularProgress from "@material-ui/core/CircularProgress";

class ResultsArea extends Component {
  render() {
    return (
      <div className="Results-Wrapper">
        <Settings className="settings" />
        <div className="Results-Area">
          {this.props.firstSearch === false && (
            <div className="no-results">
              <h1 style={{ color: "#263238" }}>Recipe Finder</h1>
              <b style={{ color: "#263238" }}>
                Enter ingredients in the search bar and then click the search
                button!
              </b>
            </div>
          )}
          {this.props.isLoading === true && this.props.firstSearch === true && (
            <div className="no-results">
              <CircularProgress
                style={{ color: "#263238" }}
                size={100}
                thickness={6}
              />
            </div>
          )}
          {this.props.isLoading === false &&
            this.props.firstSearch === true &&
            this.props.results.length === 0 && (
              <div className="no-results">
                <b>
                  No results found. Please try different filters or search term.
                </b>
              </div>
            )}
          {this.props.isLoading === false &&
            this.props.firstSearch === true &&
            this.props.results.length > 0 && (
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
                  <Result result={result} />
                ))}
              </GridList>
            )}
        </div>
      </div>
    );
  }
}

export default ResultsArea;
