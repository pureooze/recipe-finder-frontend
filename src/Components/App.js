import React, { Component } from "react";
import logo from "../static/logo.svg";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import search from "../lib/Search";

class App extends Component {
  handleSearch(event) {
    event.preventDefault();
    const result = search(event.target.value);
    console.log(result);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
