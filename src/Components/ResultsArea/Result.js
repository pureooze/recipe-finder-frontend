import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "@material-ui/icons";

import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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
    console.log("Diet: ", this.props.result.categories);
    return (
      // <Card
      //   style={{
      //     width: 300
      //   }}
      // >
      //   <CardMedia
      //     image={this.props.result.image}
      //     title={this.props.result.label}
      //     style={{ height: 0, paddingTop: "56.25%" }}
      //   />
      //   <CardContent>
      //     <Typography gutterBottom variant="h5" component="h2" noWrap>
      //       {this.props.result.label}
      //     </Typography>
      //     <div
      //       style={{
      //         height: "40px",
      //         width: "100%",
      //         whiteSpace: "nowrap",
      //         overflowX: "scroll"
      //       }}
      //     >
      //       {this.props.result.categories.map(category => {
      //         let icon = null;
      //         return <Chip icon={icon} label={category} />;
      //       })}
      //     </div>
      //   </CardContent>
      //   <CardActions disableActionSpacing>
      //     <IconButton
      //       onClick={this.handleExpandClick}
      //       aria-expanded={this.state.expanded}
      //       aria-label="Show more"
      //     >
      //       <ExpandMoreIcon />
      //     </IconButton>
      //     <IconButton onClick={this.handleLinkClick} aria-label="Go to website">
      //       <Link />
      //     </IconButton>
      //   </CardActions>
      //   {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
      //     <CardContent>
      //       <Typography paragraph>Method:</Typography>
      //       <Typography>
      //         Heat 1/2 cup of the broth in a pot until simmering, add saffron
      //         and set aside for 10 minutes.
      //       </Typography>
      //     </CardContent>
      //   </Collapse> */}
      // </Card>

      <GridListTile
        // style={{ height: "auto" }}
        cols={1}
        key={this.props.result.image}
      >
        <img src={this.props.result.image} alt={this.props.result.label} />
        <GridListTileBar
          title={this.props.result.label}
          subtitle={<span>Servings: {this.props.result.yield}</span>}
          actionIcon={
            <IconButton
              style={{ color: "white" }}
              onClick={this.handleLinkClick}
            >
              <Link />
            </IconButton>
          }
        />
      </GridListTile>
    );
  }
}

export default Result;
