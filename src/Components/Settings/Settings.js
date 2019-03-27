import React, { Component } from "react";
import { updateSearchSettings, removeSearchSettings } from "../../lib/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diet: "",
      health: [],
      ingredients: [],
      currentIngredient: ""
    };

    this.healthOptions = Object.freeze({
      "alcohol-free": "Alcohol Free",
      "celery-free": "Celery-free",
      "crustacean-free": "Crustacean-free",
      "dairy-free": "Dairy",
      "egg-free": "Eggs",
      "fish-free": "Fish",
      "gluten-free": "Gluten",
      "kidney-friendly": "Kidney friendly",
      kosher: "Kosher",
      "low-potassium": "Low potassium",
      "lupine-free": "Lupine-free",
      "mustard-free": "Mustard-free",
      "No-oil-added": "No oil added",
      "low-sugar": "No-sugar",
      paleo: "Paleo",
      "peanut-free": "Peanuts",
      pescatarian: "Pescatarian",
      "pork-free": "Pork-free",
      "red-meat-free": "Red meat-free",
      "sesame-free": "Sesame-free",
      "shellfish-free": "Shellfish",
      "soy-free": "Soy",
      "sugar-conscious": "Sugar-conscious",
      "tree-nut-free": "Tree Nuts",
      vegan: "Vegan",
      vegetarian: "Vegetarian",
      "wheat-free": "Wheat-free"
    });

    this.handleDietChange = this.handleDietChange.bind(this);
    this.handleHealthChange = this.handleHealthChange.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleDietChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log("Name: ", name, value);

    this.setState({
      diet: name
    });

    updateSearchSettings({ diet: name });
  }

  handleHealthChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log("Name: ", name, value);

    if (this.state.health.includes(name)) {
      const health = this.state.health.filter(val => val !== name);

      this.setState({
        health
      });

      if (health.length > 0) {
        updateSearchSettings({ health });
      } else {
        removeSearchSettings("health");
      }
    } else {
      this.setState({
        health: [...this.state.health, name]
      });

      updateSearchSettings({ health: [...this.state.health, name] });
    }
  }

  handleIngredientChange(event) {
    event.preventDefault();
    this.setState({
      currentIngredient: event.target.value
    });
  }

  handleAddIngredient(event) {
    event.preventDefault();
    console.log("Current Ing: ", this.state.currentIngredient);

    const currentIngredient = this.state.currentIngredient;
    this.setState({
      ingredients: [...this.state.ingredients, currentIngredient],
      currentIngredient: ""
    });

    updateSearchSettings({
      inventory: [...this.state.ingredients, currentIngredient]
    });
  }

  render() {
    return (
      <div className="settings">
        <div class="Ingredients">
          <h3>Ingredients</h3>
          <Input
            id="ingredient-input"
            placeholder="Add Ingredient To Filter"
            className="ingredient-input"
            value={this.state.currentIngredient}
            onChange={this.handleIngredientChange}
          />
          <IconButton
            aria-label="Add Ingredient"
            style={{ padding: 10, color: "white" }}
            onClick={this.handleAddIngredient}
          >
            <AddIcon />
          </IconButton>
          {this.state.ingredients.map(ingredient => (
            <div class="ingredient-filter">
              <span>{ingredient}</span>
            </div>
          ))}
        </div>
        <div class="diet">
          <h3>Diet</h3>

          <label>
            <input
              type="radio"
              name="balanced"
              checked={this.state.diet === "balanced"}
              onChange={this.handleDietChange}
            />{" "}
            Balanced
          </label>
          <label>
            <input
              type="radio"
              name="high-protein"
              checked={this.state.diet === "high-protein"}
              onChange={this.handleDietChange}
            />{" "}
            High-protein
          </label>
          <label>
            <input
              type="radio"
              name="high-fiber"
              checked={this.state.diet === "high-fiber"}
              onChange={this.handleDietChange}
            />{" "}
            High-fiber
          </label>
          <label>
            <input
              type="radio"
              name="low-fat"
              checked={this.state.diet === "low-fat"}
              onChange={this.handleDietChange}
            />{" "}
            Low-fat
          </label>
          <label>
            <input
              type="radio"
              name="low-carb"
              checked={this.state.diet === "low-carb"}
              onChange={this.handleDietChange}
            />{" "}
            Low-carb
          </label>
        </div>
        <div class="health">
          <h3>Health</h3>

          {Object.keys(this.healthOptions).map(key => (
            <label for={key}>
              <input
                type="checkbox"
                name={key}
                value={key}
                checked={this.state.health.includes(key)}
                onChange={this.handleHealthChange}
              />
              {this.healthOptions[key]}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default Settings;
