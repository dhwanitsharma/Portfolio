import React, { Component } from 'react';
export default class Intro extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="intro">   
        <div className="intro-overlay" />	
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>I'm Dhwanit Sharma.</h1>
              <p className="intro-position">
                <span>Full Stack Developer</span>
                <span>AI/ML Enthusiast</span> 
              </p>
            </div>  
          </div>   		 		
        </div> {/* /intro-content */} 
        <ul className="intro-social">        
          <li><a href="https://github.com/dhwanitsharma" target="_blank" rel ="noopener noreferrer"><i className="fa fa-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/dhwanitsharma/" target="_blank" rel ="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://www.instagram.com/dhwanitsharma/" target="_blank" rel ="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
        </ul> {/* /intro-social */}      	
      </section> {/* /intro */}
      </React.Fragment>
    );
  }
}