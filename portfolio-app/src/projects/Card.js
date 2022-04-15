import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5%",
    justifyContent: "center",
  },
  cardHeader: {
    fontWeight: "bold",
    color: "green",
  },
  card: {
    padding: "5%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  customTooltip: {
    color: "white",
    fontWeight: "bolder",
    background: "darkgreen",
    textShadow: "4px #FFFFFF",
  },
  customIcon: {
    color: "darkgreen",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    color: "darkgreen",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
const CustomCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      {props.cards.map((card) => {
        return (
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title={card.title} />
              <CardMedia
                className={classes.media}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip
                  title="View on Github"
                  classes={{ tooltip: classes.customTooltip }}
                >
                  <a href={card.gitLink}>
                    <IconButton
                      aria-label="view on github"
                      style={{ color: "darkgreen" }}
                    >
                      <i className="fab fa-github" />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip
                  title="See deployed site"
                  classes={{ tooltip: classes.customTooltip }}
                >
                  <a href={card.deployedLink}>
                    <IconButton aria-label="view deployed site">
                      <i
                        className="fas fa-code"
                        style={{ color: "darkgreen" }}
                      />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip
                  title="Learn More"
                  classes={{ tooltip: classes.customTooltip }}
                >
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{card.content}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
};

export default CustomCard;
