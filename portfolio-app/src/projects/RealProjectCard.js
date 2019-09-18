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

import TT from "../assets/img/tabt.PNG";
import FH from "../assets/img/please.PNG";

const Header = styled.h1`
  margin-top: -45px;
  hr {
    width: 85%;
    border: none;
    color: white;
    background-color: white;
    height: 2px;
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "5%",
    justifyContent: "center"
  },
  card: {
    padding: "5%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const RealProjectCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [anotherexpanded, setAnotherExpanded] = useState(false);
  //currently have to have different methods for each expansion button or else they all open when you click one, find better way

  const handleExpandClick = e => {
    setExpanded(!expanded);
  };
  const handleAnotherExpandClick = e => {
    setAnotherExpanded(!anotherexpanded);
  };

  return (
    <div className={classes.root}>
      <Header id="#projects">
        Recent Projects
        <hr />
      </Header>
      <Grid container spacing={9}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardHeader title="Future Hope School" />
            <CardMedia
              className={classes.media}
              image={FH}
              title="Future Hope"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Future Hope was the capstone project for Lambda School that I
                helped build. It's purpose is to connect mentors in the US with
                classrooms all over the world.
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="View on Github">
                <a href="https://github.com/labs-future-hope/Future-Hope-Client">
                  <IconButton aria-label="view on github">
                    <i className="fab fa-github" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="See deployed site">
                <a href="https://staging.futurehopeschool.com/">
                  <IconButton aria-label="view deployed site">
                    <i className="fas fa-code" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="Learn More">
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
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
                <Typography paragraph>
                  Future Hope was built from scratch in 8-weeks with a team of
                  6. Along with my teammates, I worked directly with the
                  external stakeholder of Future Hope. Technologies used to
                  build Future Hope include: React/Redux, Firebase/Cloud
                  Firestore, OAuth, Material UI, MDBootstrap. My main
                  contribuitions were setting up Firebase/Firestore, OAuth,
                  instant messaging support, and more.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {/* //! TABLESS THRUSDAYS */}
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardHeader title="Tabless Thursdays" />
            <CardMedia
              className={classes.media}
              image={TT}
              title="Tabless Thursdays"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Tabless Thursdays is a tab managment web app that I built during
                Lambda School's front end cirriculum.
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="View on Github">
                <a href="https://github.com/tabless-thursday-6-27-2019/tabless-thursday-frontend">
                  <IconButton aria-label="view on github">
                    <i className="fab fa-github" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="See deployed site">
                <a href="https://tabless-thursday-fe.netlify.com/">
                  <IconButton aria-label="view deployed site">
                    <i className="fas fa-code" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="Learn More">
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: anotherexpanded
                  })}
                  onClick={handleAnotherExpandClick}
                  aria-expanded={anotherexpanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Collapse in={anotherexpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Tabless thursdays is a tab management web app built in under a
                  week by a team of 5. I built the front-end with one other
                  devleoper. Our tech stack included: React, Redux,
                  React-Router, Node-Sass, and Axios.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default RealProjectCard;
