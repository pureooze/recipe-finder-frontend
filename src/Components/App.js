import React, { Component } from "react";
import logo from "../static/logo.svg";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import search from "../lib/Search";
import ResultsArea from "./ResultsArea/ResultsArea";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: { matches: [] }
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    const result = search(event.target.value);
    this.setState({
      results: result
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearch={this.handleSearch} />
        <ResultsArea results={this.state.results} />
      </div>
    );
  }
}

export default App;
