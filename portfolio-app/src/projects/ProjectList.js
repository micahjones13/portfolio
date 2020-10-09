import React from "react";
// import ProjectCard from "./ProjectCard";
// import { data } from "../assets/data.js";
import styled from "styled-components";
import BlackSand from "../assets/img/blacksand.jpg";
import RealProjectCard from "./RealProjectCard";
import Footer from "../components/Footer";

const ProjectWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  background-image: url(${BlackSand});
  color: white;
  a {
    text-decoration: none;
  }

  h1 {
    font-size: 3rem;
    @media (max-width: 400px) {
      font-size: 2.5rem;
    }
  }
  hr {
    width: 85%;
    border: none;
    color: white;
    background-color: white;
    height: 2px;
  }
`;

const ProjectList = () => {
  // state = {
  //   projects: data
  // };

  return (
    <ProjectWrapper>
      <RealProjectCard />
      <hr></hr>
      <Footer />
    </ProjectWrapper>
  );
};

export default ProjectList;

/*

        <h1>My Projects</h1>
        <hr />
        {this.state.projects.map(project => {
          return <ProjectCard project={project} key={project.id} />;
        })}
*/
