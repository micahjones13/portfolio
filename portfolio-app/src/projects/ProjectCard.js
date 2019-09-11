import React from "react";
import styled from "styled-components";

const ProjectCardWrapper = styled.div`
    // height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 50%;
    }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  img{
      position: relative;
  }
  .hoverInfo{
      position: absolute;
  }
  
`;
const ProjectCard = props => {
  return (
    <ProjectCardWrapper>
      <h2>{props.project.title}</h2>
      <InfoWrapper>
      <img src={props.project.image} alt='project snip'/>
            <div className = "hoverInfo">
            <button href={props.project.githubRepo}>Github</button>
            <button href={props.project.deploymentURL}>Deployed Site</button>
            </div>
            <h5>{props.project.description}</h5>
        </InfoWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
