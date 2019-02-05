import React, { Component } from "react";
import Result from "./Result";

class ResultsArea extends Component {
  render() {
    console.log(this.props.results);
    const results = this.props.results.matches.map(result => (
      <li style={{ float: "left", margin: "20px" }}>
        <Result result={result} />
      </li>
    ));

    // marginTop: "40px",
    // marginRight: "50px",
    // marginLeft: "50px",
    return (
      <ul
        style={{
          marginTop: "40px",
          display: "inline-block",
          listStyleType: "none",
          listStyleImage: "none"
        }}
      >
        {results}
      </ul>
    );
  }
}

export default ResultsArea;
