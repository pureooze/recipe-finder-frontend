import React from "react";

import { storiesOf } from "@storybook/react";
import "../index.css";
import "../Components/App.scss";

import ResultsArea from "../Components/ResultsArea/ResultsArea";

storiesOf("ResultsArea", module)
  .add("with text", () => {
    const results = [
      {
        label: "Test label",
        yield: 1,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: []
      },
      {
        label: "Test label",
        yield: 2,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: []
      },
      {
        label: "Test label",
        yield: 3,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: []
      },
      {
        label: "Test label that is really long and should hide and not show",
        yield: 4,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: [
          "Low-Carb",
          "Sugar-Conscious",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ]
      },
      {
        label: "Test label",
        yield: 5,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: []
      },
      {
        label: "Test label",
        yield: 6,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: []
      },
      {
        label: "Test label",
        yield: 7,
        image:
          "https://www.edamam.com/web-img/a7e/a7ed17fe7ec49861b5435293517f26e0.jpg",
        categories: []
      }
    ];

    function updateSearch() {
      console.log("updated");
    }

    return (
      <div className="root">
        <div className="App">
          <ResultsArea isLoading={false} results={results} updateSearch={updateSearch} />
        </div>
      </div>
    );
  })
  .add("no results", () => {
    function updateSearch() {
      console.log("updated");
    }

    return (
      <div className="root">
        <div className="App">
          <ResultsArea isLoading={false}  results={[]} updateSearch={updateSearch} />
        </div>
      </div>
    );
  })
  .add("loading progress", () => {
    function updateSearch() {
      console.log("updated");
    }

    return (
      <div className="root">
        <div className="App">
          <ResultsArea isLoading={true} results={[]} updateSearch={updateSearch} />
        </div>
      </div>
    );
  });
