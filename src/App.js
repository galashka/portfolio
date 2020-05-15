import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
        <Particles className='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 5
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      <Navbar></Navbar>
            
      <div className="App-header">
      <Header></Header>
      </div>

      <div className='About'>
        <About></About>
      </div>

      <div className='work'>
        <Work></Work>
      </div>

      <div className='contact'>
        <Contact></Contact>
      </div>

    </div>
  );
}

export default App;
