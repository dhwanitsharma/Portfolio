import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="services" className="s-services ss-dark target-section">
        <div className="shadow-overlay" />
        <div className="row heading-block heading-block--center" data-aos="fade-up">
          <div className="column2 large-full">
            <h2 className="section-heading section-heading--centerbottom">Skills</h2>
          </div>
        </div> {/* end heading-block */}
        <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
          <div className="column2 item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">BackEnd</h4>
              <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"JAVA \nPython"}</p>
                  <h4 className="item-title">FrameWorks</h4>
                  <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"Hibernate \nSpring\nDjango\nTensorFlow\nPygame"}</p>         
            </div>
          </div>
          <div className="column2 item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">FrontEnd</h4>
              <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"JavaScrpit\nHTML\nCSS"}</p>
                  <h4 className="item-title">FrameWorks</h4>
                  <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"Node.js \nOracle JET\nReact\nJackBe"}</p>

            </div>
          </div>
          <div className="column2 item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Database</h4>
              <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"Oracle Database\nMySQL\nNoSQL"}</p>
                  <h4 className="item-title">Tools</h4>
                  <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"SVN\nGit\nJIRA"}</p>
            </div>
          </div>
          <div className="column2 item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Servers</h4>
              <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"WebLogic App Server\nTomcat Apache Server"}</p>
            </div>
          </div>
        </div> {/* end services-list */}
      </section> {/* end s-services */}
      </React.Fragment>
    );
  }
}