import React from 'react'

const ProjectCard = (props) => {
   
    return (
        <div>
            <h5>{props.project.title}</h5>
            <h5>{props.project.description}</h5>
            <h5>{props.project.githubRepo}</h5>
            <h5>{props.project.deploymentURL}</h5>
        </div>
    )
}

export default ProjectCard
