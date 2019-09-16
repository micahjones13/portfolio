import React from "react";
import styled from "styled-components";

const ProjectCardWrapper = styled.div`
  // height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  .link-div {
    display: flex;
    justify-content: space-around;
    width: 33%;
  }
  .git-div {
    background: lightgrey;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2%;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
  .dep-div {
    background: lightgrey;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2%;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
  a {
    text-decoration: none;
    width: 30%;
  }
  img {
    position: relative;
    z-index: 1;
  }
`;
const ProjectCard = props => {
  return (
    <ProjectCardWrapper>
      <h2>{props.project.title}</h2>
      <InfoWrapper>
        <img src={props.project.image} alt="project snip" />
        <div className="link-div">
          <a href={props.project.githubRepo}>
            <div className="git-div">Github</div>
          </a>
          <a href={props.project.deploymentURL}>
            <div className="dep-div">Deployed Site</div>
          </a>
        </div>
        <h5>{props.project.description}</h5>
      </InfoWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
