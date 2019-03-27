import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "@material-ui/icons";

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(event) {
    if (window.open) {
      window.open(this.props.result.url, "_blank");
    }
  }

  handleExpandClick(event) {
    event.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <Card
        style={{
          width: 300
        }}
      >
        <CardHeader
          title={this.props.result.label}
          subheader={"Servings: " + this.props.result.yield}
          titleTypographyProps={{
            noWrap: true
          }}
        />
        <CardMedia
          image={this.props.result.image}
          title={this.props.result.label}
          style={{ height: 0, paddingTop: "56.25%" }}
        />
        {/* <CardContent>
          <Typography component="ul">
            {this.props.result.ingredientLines.map((ingredient, index) => {
              if (index <= 4 || this.state.expanded) {
                return (
                  <Typography component="li">
                    <Typography component="p">{ingredient}</Typography>
                  </Typography>
                );
              }
            })}
          </Typography>
        </CardContent> */}
        <CardActions disableActionSpacing>
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <IconButton onClick={this.handleLinkClick} aria-label="Go to website">
            <Link />
          </IconButton>
        </CardActions>
        {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    );
  }
}

export default Result;
