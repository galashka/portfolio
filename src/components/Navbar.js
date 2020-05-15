import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Bounce from 'react-reveal';

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
        <nav>
            <ul>
              <Bounce top>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="homw"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >MAIN</Link></li>

                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >ABOT ME</Link></li>

                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >WORK</Link></li>

                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >CONTACT</Link></li>
            </Bounce>
            </ul>
        </nav> );
    }
}
 
export default Navbar;