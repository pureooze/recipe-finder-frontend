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
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import blue from "@material-ui/core/colors/blueGrey";

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
  },
  switch: {
    color: blue[600],
    "&$checked": {
      color: blue[500]
    }
  },
  checked: {},
  colorSwitchBase: {
    color: blue[300],
    "&$colorChecked": {
      color: blue[500],
      "& + $colorBar": {
        backgroundColor: blue[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {}
};

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diet: "",
      health: [],
      ingredients: this.props.ingredients || [],
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
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  removeIngredient(event) {
    const { id } = event.currentTarget.dataset;
    const ingredients = this.state.ingredients.splice(parseInt(id) + 1, 1);

    this.setState({
      ingredients
    });

    if (ingredients.length > 0) {
      updateSearchSettings({
        inventory: ingredients
      });
    } else {
      removeSearchSettings("inventory");
    }
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
        <h3>Settings</h3>
        <div class="Ingredients" style={{ paddingRight: "10px" }}>
          <h4>Ingredients</h4>
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
          <Grid item xs={12}>
            {this.state.ingredients.length > 0 && (
              <div
                style={{
                  backgroundColor: "#37474f",
                  width: "100%"
                }}
              >
                <List dense={true}>
                  {this.state.ingredients.map((ingredient, key) => (
                    // <div class="ingredient-filter">
                    //   <span>{ingredient}</span>
                    // </div>
                    <ListItem
                      style={{
                        border: "#263238",
                        borderStyle: "solid",
                        borderWidth: "0.5px",
                        borderBottomWidth: "0px"
                      }}
                    >
                      <ListItemText
                        style={{ color: "white" }}
                        primary={ingredient}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="Delete"
                          onClick={this.removeIngredient}
                          data-id={key}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </div>
            )}
          </Grid>
        </div>
        <div class="diet">
          <h4>Diet</h4>

          <label>
            <Radio
              type="radio"
              name="balanced"
              checked={this.state.diet === "balanced"}
              onChange={this.handleDietChange}
              classes={{
                root: classes.switch,
                checked: classes.checked
              }}
            />{" "}
            Balanced
          </label>
          <label>
            <Radio
              type="radio"
              name="high-protein"
              checked={this.state.diet === "high-protein"}
              onChange={this.handleDietChange}
              classes={{
                root: classes.switch,
                checked: classes.checked
              }}
            />{" "}
            High-protein
          </label>
          <label>
            <Radio
              type="radio"
              name="high-fiber"
              checked={this.state.diet === "high-fiber"}
              onChange={this.handleDietChange}
              classes={{
                root: classes.switch,
                checked: classes.checked
              }}
            />{" "}
            High-fiber
          </label>
          <label>
            <Radio
              type="radio"
              name="low-fat"
              checked={this.state.diet === "low-fat"}
              onChange={this.handleDietChange}
              classes={{
                root: classes.switch,
                checked: classes.checked
              }}
            />{" "}
            Low-fat
          </label>
          <label>
            <Radio
              type="radio"
              name="low-carb"
              checked={this.state.diet === "low-carb"}
              onChange={this.handleDietChange}
              classes={{
                root: classes.switch,
                checked: classes.checked
              }}
            />{" "}
            Low-carb
          </label>
        </div>
        <div class="health">
          <h4>Health</h4>

          <List dense={true}>
            {Object.keys(this.healthOptions).map(key => (
              <ListItem for={key}>
                <Switch
                  name={key}
                  value={key}
                  checked={this.state.health.includes(key)}
                  onChange={this.handleHealthChange}
                  dense={true}
                  classes={{
                    switchBase: classes.colorSwitchBase,
                    checked: classes.colorChecked,
                    bar: classes.colorBar
                  }}
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
