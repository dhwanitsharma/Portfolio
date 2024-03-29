import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://github.com/dhwanitsharma" target="_blank" rel ="noopener noreferrer"><i className="fa fa-github" /></a></li>
            <li><a href="https://www.linkedin.com/in/dhwanitsharma/" target="_blank" rel ="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://www.instagram.com/dhwanitsharma/" target="_blank" rel ="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
            </ul>
            
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-arrow-up" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}