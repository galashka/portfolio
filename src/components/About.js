import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import avatar from '../pictures/AVATAR.png';
import Tilt from 'react-tilt';

class About extends Component {
  state = {};
  render() {
    return (
    <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              Hello there!
            </Fade>
          </h1>
          <Fade bottom>
            <p>
              {data.abouttext}
            </p>
            </Fade>
        </div>
        <Tilt className="Tilt" options={{ max : 50 }}>
          <div className="Tilt-inner">
        <Fade right>
          <div className='face'>
            <img src={avatar}/>
          </div>
        </Fade>
        </div>
        </Tilt>
    </div>
    );
  }
}

export default About;
