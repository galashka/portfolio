import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import html from '../pictures/HTML5.png';
import css from '../pictures/CSS3.png';
import js from '../pictures/JS.png';
import react from '../pictures/REACT.png';
import photoshop from '../pictures/PHOTOSHOP.png';
import illustrator from '../pictures/ILLUSTRATOR.png';
import afterEffects from '../pictures/AFTEREFFECTS.png';
import lightRoom from '../pictures/LIGHTROOM.png';
import Tilt from 'react-tilt';

class Header extends Component {
  state = {};

  render() {
    return (
        <div>
        <h1 className="heading-background">
          
        </h1>

        <Fade left>
          <p className="web-development">
            WEB <br/>DEVELOPMENT...
          </p>
          </Fade>
          <Tilt className="Tilt" options={{ max : 50 }}>
            <div className="Tilt-inner">
            <Bounce bottom cascade>
            <div className='web-development-icons'>
              <img src={html}/>
              <img src={css}/>
              <img src={js}/>
              <img src={react}/>
            </div>
            </Bounce>
            </div>
          </Tilt>
        <Fade right>
          <p className="graphic-design">
            GRAPHIC <br/> DESIGN...
          </p>
          </Fade>
          <Tilt className="Tilt" options={{ max : 50 }}>
            <div className="Tilt-inner">
            <Bounce bottom cascade>
            <div className='graphic-design-icons'>
              <img src={photoshop}/>
              <img src={illustrator}/>
              <img src={afterEffects}/>
              <img src={lightRoom}/>
            </div>
            </Bounce>
          </div>
          </Tilt>
        </div>
    );
  }
}

export default Header;

{/*<button>
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>*/}