import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectCards } from '../helpers/ProjectCards';
import { GoMarkGithub  } from 'react-icons/go';
import '../styles/SingleProject.css';

function SingleProject() {
    const { id } = useParams();
    const project = ProjectCards[id];
    return (
        <div className="project">
            <h2> {project.name} </h2>
            <img src={project.image} alt={project.alt} />
            <p> {project.description} </p>
            <p><strong>Skills:</strong> {project.skills}</p>
            <a href={project.link}>Link to the project</a>
            <a href={project.github} id="github"> <GoMarkGithub /> Link to the GitHub codebase <GoMarkGithub /></a>
        </div>
    );
}

export default SingleProject;