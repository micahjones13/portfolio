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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5%",
    justifyContent: "space-evenly",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardHeader: {
    fontWeight: "bold",
    color: "green",
  },
  card: {
    padding: "5%",
    marginBottom: "2%",
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
  const [expanded1, setExpanded1] = useState(false);

  return (
    <div className={classes.root}>
      {props.cards.map((card) => {
        return (
          <Grid item xs={10} sm={5} key={card.id}>
            <Card className={classes.card}>
              <CardHeader title={card.title} style={{ color: "darkgreen" }} />
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
                    className={
                      card.id === 1
                        ? clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                          })
                        : clsx(classes.expand, {
                            [classes.expandOpen]: expanded1,
                          })
                    }
                    id={card.id}
                    onClick={() => {
                      if (card.id === 1) {
                        console.log("id is 1");
                        setExpanded(!expanded);
                      } else if (card.id === 2) {
                        console.log("id is 2");
                        setExpanded1(!expanded1);
                      }
                    }}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
              <Collapse
                in={card.id === 1 ? expanded : expanded1}
                timeout="auto"
                unmountOnExit
              >
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
