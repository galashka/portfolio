import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import Tilt from 'react-tilt';

class Work extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Tilt className="Tilt" options={{ max : 20 }}>
                    <div className="Tilt-inner">
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                 </div>
          </Tilt>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;