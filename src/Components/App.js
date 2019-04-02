import React, { Component } from "react";
import logo from "../static/logo.svg";
import "./App.scss";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import search from "../lib/Search";
import ResultsArea from "./ResultsArea/ResultsArea";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      smallHeader: false,
      searchTerm: "",
      isLoading: false,
      firstSearch: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.resizeHeaderOnScroll);
  // }

  // resizeHeaderOnScroll() {
  //   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //     shrinkOn = 100,
  //     headerEl = document.getElementById("header");

  //   if (distanceY > shrinkOn) {
  //     headerEl.classList.add("smaller");
  //   } else {
  //     headerEl.classList.remove("smaller");
  //   }

  //   this.setState({ smallHeader: distanceY > shrinkOn });
  // }

  handleSearch(event) {
    event.preventDefault();
    this.setState({
      isLoading: true,
      firstSearch: true
    });
    search(this.state.searchTerm).then(results => {
      this.setState({
        results,
        isLoading: false
      });
    });
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div id="header" className="header">
          {/* <Header smallHeader={this.state.smallHeader} /> */}
          <Header />
          <SearchBar
            searchTerm={this.state.searchTerm}
            handleInputChange={this.handleInputChange}
            handleSearch={this.handleSearch}
          />
        </div>
        <ResultsArea
          isLoading={this.state.isLoading}
          results={this.state.results}
          updateSearch={this.updateSearch}
          firstSearch={this.state.firstSearch}
        />
      </div>
    );
  }
}

export default App;
