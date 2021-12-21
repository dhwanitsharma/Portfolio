import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"I am graduate student in University of Illinois Chicago pursuing master’s in Computer Science. The major focus of my master’s is on Artificial Intelligence and Machine Learning.\nI have worked as a Technical Consultant in Oracle. My job profile required me to work on JAVA, Oracle Database, and JavaScript. In addition, I have worked on various personal projects on Python and Machine Learning as I am interested in the future scope of these technologies. These projects are mentioned on the project section with the GitHub link for the source code.\nCurrently I am looking for a role as summer intern 2022. I am interested in working as a Data Scientist or as a Software Engineering Developer."}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Dhwanit Sharma</span><br />
                  <span>dhwanitsharma5@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}