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
import RM from "../assets/img/randommaze2.PNG";
import PP from "../assets/img/pokerprogram.PNG";

const Header = styled.h1`
  // margin-top: -45px;
  margin: 0;
  font-family: "Gayathri", sans-serif;
  @media (max-width: 600px) {
    margin-top: 2%;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }

  hr {
    width: 85%;
    border: none;
    color: white;
    background-color: white;
    height: 2px;
  }
  a {
    text-decoration: none;
    color: white;
    cursor: default;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5%",
    justifyContent: "center",
  },
  card: {
    padding: "5%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const RealProjectCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [anotherexpanded, setAnotherExpanded] = useState(false);
  const [anotherexpanded1, setAnotherExpanded1] = useState(false);
  const [anotherexpanded2, setAnotherExpanded2] = useState(false);

  //currently have to have different methods for each expansion button or else they all open when you click one, find better way

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };
  const handleAnotherExpandClick = (e) => {
    setAnotherExpanded(!anotherexpanded);
  };
  const handleAnotherExpandClick1 = (e) => {
    setAnotherExpanded1(!anotherexpanded1);
  };
  const handleAnotherExpandClick2 = (e) => {
    setAnotherExpanded2(!anotherexpanded2);
  };
  return (
    <div className={classes.root}>
      <Header>
        <a name="recent-projects">Recent Projects</a>
        <hr />
      </Header>
      <Grid container spacing={3}>
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
                helped build with a team of 6 in 8-weeks.
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
                    [classes.expandOpen]: anotherexpanded,
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
        {/* //! C# CARD GAMES */}
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardHeader title="C# Card Games" />
            <CardMedia
              className={classes.media}
              image={PP}
              title="C# Card Games"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                These are card games I built while learning C# from Kevin
                MacMaster, a developer at Arbiter Sports.
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="View on Github">
                <a href="https://github.com/micahjones13/Poker">
                  <IconButton aria-label="view on github">
                    <i className="fab fa-github" />
                  </IconButton>
                </a>
              </Tooltip>

              <Tooltip title="Learn More">
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: anotherexpanded1,
                  })}
                  onClick={handleAnotherExpandClick1}
                  aria-expanded={anotherexpanded1}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Collapse in={anotherexpanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  While learning C# from Kevin MacMaster, a developer at Arbiter
                  Sports, we built two card games: poker and blackjack. This was
                  accomplished using LINQ, extenstions, and OOP methodology.
                  This was such a great learning experience for me, and Kevin
                  was a great teacher. C# has quickly become a language that I
                  enjoy programming in.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {/* //! Maze RUnner */}
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardHeader title="Random Maze Generator" />
            <CardMedia
              className={classes.media}
              image={RM}
              title="Random Maze Generator"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This random maze generator is a project I built during Lambda's
                computer science cirriculum.
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="View on Github">
                <a href="https://github.com/cs22-team-9">
                  <IconButton aria-label="view on github">
                    <i className="fab fa-github" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="See deployed site">
                <a href="https://cs22group9.netlify.com/">
                  <IconButton aria-label="view deployed site">
                    <i className="fas fa-code" />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="Learn More">
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: anotherexpanded2,
                  })}
                  onClick={handleAnotherExpandClick2}
                  aria-expanded={anotherexpanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Collapse in={anotherexpanded2} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  This random maze generator was built by a team of 4 in under a
                  week. I was in charge of getting the back end up and running
                  using Django and Python. I also helped the front end using
                  React/Redux to display the map, and JavaScript to move the
                  character sprite.
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
