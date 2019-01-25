import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

class SearchBar extends Component {
  render() {
    return (
      <form className="Search-bar" onSubmit={this.props.handleSearch}>
        <Paper
          elevation={1}
          style={{
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400
          }}
        >
          <InputBase
            placeholder="Search Ingredients"
            style={{ marginLeft: 8, flex: 1 }}
          />
          <IconButton aria-label="Search" style={{ padding: 10 }} type="submit">
            <SearchIcon />
          </IconButton>
          <Divider style={{ width: 1, height: 28, margin: 4 }} />
          <IconButton style={{ padding: 10 }} aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </Paper>
      </form>
    );
  }
}

export default SearchBar;
