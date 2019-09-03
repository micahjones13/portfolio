import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import { data } from '../assets/data.js';

export default class ProjectList extends Component {
    state = {
        projects: data
        
    }
    render() {
        return (
            <div>
            <h1>projects</h1>
            {
                this.state.projects.map(project => {
                    return(
                        <ProjectCard 
                            project = {project}
                            key = {project.id}
                        />
                    )
                })
            }
                
            </div>
        )
    }
}
