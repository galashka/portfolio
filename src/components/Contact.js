import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <h1>
          <Fade bottom cascade> Contact.</Fade>
         </h1>
          <Fade bottom>
            <div className='contact-content'>
                <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
              <h2>
                All companies are looking for talents.<br></br>
              <span className='amazing-color'>Smart ones are growing together...</span>
              </h2>
        </div>
        </Fade>

            <span className='footer'>Sasha Dakhin <a href="http://galashka-portfolio.netlify.app">PORTFOLIO SITE</a></span>
        </div>);
    }
}
 
export default Contact;