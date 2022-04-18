import React from "react";
import { data } from "../assets/data";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./Card.js";

const Header = styled.h1`
  margin: 0;
  padding-bottom: 1%;
  color: black;
  font-family: "Gayathri", sans-serif;

  @media (max-width: 600px) {
    margin-top: 2%;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }

  .break {
    width: 85%;
    border: none;
    color: black;
    background-color: black;
    height: 2px;
  }
  a {
    text-decoration: none;
    color: white;
    cursor: default;
  }
  #recent-projects {
    color: black;
  }
`;

const ProjectCard = () => {
  return (
    <div className="project-card">
      <Header>
        {/* eslint-disable-next-line */}
        <a name="recent-projects" id="recent-projects">
          Recent Projects
        </a>
        <hr className="break" />
      </Header>
      <Grid container spacing={3}>
        <CustomCard cards={data} />
      </Grid>
    </div>
  );
};

export default ProjectCard;
