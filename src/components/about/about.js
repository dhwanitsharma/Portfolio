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
            <p>I am an Engineering Graduate with a major in Electronics and Telecommunication currently working in Oracle as Technical Consultant. My job profile requires me to work on JAVA, Oracle Database, and JavaScript. In addition, I have worked on various personal projects on Python and Machine Learning as I am interested in the future scope of these technologies.
            In my teens, I was drawn to the computers due to my interest in video games. First Encounter Assault Recon (F.E.A.R), the popular game not only fired my imagination but also triggered my curiosity about the novelty of an interactive simulated world. I remember conjuring up multiple scenarios in my imagination, all of which were now evidently possible. 
            The intuitive AI of the game and the way in which multiple variables and factors were taken into consideration in real-time was fascinating to my mind.
            I want to contribute to the field of AI/ML and my aim is to gain expertise in natural language processing, neural networks and computer vision. 
            As a passion project I am also working on a video Game which I hope to release in the near future.
            </p>
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