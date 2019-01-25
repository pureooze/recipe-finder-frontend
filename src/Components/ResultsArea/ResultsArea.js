import React, { Component } from "react";
import Result from "./Result";

class ResultsArea extends Component {
  render() {
    console.log(this.props.results);
    const results = this.props.results.matches.map(result => (
      <Result result={result} />
    ));
    return <div>{results}</div>;
  }
}

export default ResultsArea;
