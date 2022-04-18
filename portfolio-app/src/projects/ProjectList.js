import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectWrapper = styled.div`
  background: linear-gradient(to bottom, white, gray, black);
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
  return (
    <ProjectWrapper>
      <ProjectCard />
      <hr></hr>
    </ProjectWrapper>
  );
};

export default ProjectList;
