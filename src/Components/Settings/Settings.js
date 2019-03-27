import React, { Component } from "react";
import { updateSearchSettings, removeSearchSettings } from "../../lib/Search";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  root: {
    background: "black"
  },
  input: {
    color: "white"
  },
  ingredientPaper: {
    "background-color": "#37474f",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  ingredientInput: {
    "margin-left": 8,
    flex: 1,
    color: "white"
  },
  "ingredient-filter": {
    "background-color": "#37474f",
    color: "white"
  },

  ingredientFilterAdd: {
    "background-color": "#37474f",
    padding: 10,
    color: "white"
  }
};

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
    const { classes } = this.props;

    return (
      <div className="settings">
        <div class="Ingredients">
          <h3>Ingredients</h3>
          <Paper elevation={1} className={classes.ingredientPaper}>
            <InputBase
              id="ingredient-input"
              placeholder="Ingredient"
              className={classes.ingredientInput}
              value={this.state.currentIngredient}
              onChange={this.handleIngredientChange}
            />
            <Button
              size="small"
              aria-label="Add Ingredient"
              className={classes.ingredientFilterAdd}
              onClick={this.handleAddIngredient}
            >
              <AddIcon size="small" />
            </Button>
          </Paper>
          {this.state.ingredients.map(ingredient => (
            <div class="ingredient-filter">
              <span>{ingredient}</span>
            </div>
          ))}
        </div>
        <div class="diet">
          <h3>Diet</h3>

          <label>
            <Radio
              type="radio"
              name="balanced"
              checked={this.state.diet === "balanced"}
              onChange={this.handleDietChange}
            />{" "}
            Balanced
          </label>
          <label>
            <Radio
              type="radio"
              name="high-protein"
              checked={this.state.diet === "high-protein"}
              onChange={this.handleDietChange}
            />{" "}
            High-protein
          </label>
          <label>
            <Radio
              type="radio"
              name="high-fiber"
              checked={this.state.diet === "high-fiber"}
              onChange={this.handleDietChange}
            />{" "}
            High-fiber
          </label>
          <label>
            <Radio
              type="radio"
              name="low-fat"
              checked={this.state.diet === "low-fat"}
              onChange={this.handleDietChange}
            />{" "}
            Low-fat
          </label>
          <label>
            <Radio
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

          <List dense={true}>
            {Object.keys(this.healthOptions).map(key => (
              <ListItem for={key}>
                <Switch
                  name={key}
                  value={key}
                  checked={this.state.health.includes(key)}
                  onChange={this.handleHealthChange}
                  disableRipple
                />
                {this.healthOptions[key]}
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Settings);
