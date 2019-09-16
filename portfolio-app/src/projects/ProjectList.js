import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../assets/data.js";
import styled from "styled-components";
import BlackSand from "../assets/img/blacksand.jpg";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${BlackSand});
  color: white;
  // height: 150vh;
  h1 {
    font-size: 3rem;
  }
  hr {
    width: 85%;
    border: none;
    color: white;
    background-color: white;
    height: 5px;
  }
`;

export default class ProjectList extends Component {
  state = {
    projects: data
  };
  render() {
    return (
      <ProjectWrapper>
        <h1>My Projects</h1>
        <hr />
        {this.state.projects.map(project => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </ProjectWrapper>
    );
  }
}
