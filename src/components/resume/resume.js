import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                <h3>University of Illinois Chicago</h3>
                <p className="info">MS in Computer Science<span>•</span> <em className="date">Aug 2021 - Present</em></p>
                <h4>CourseWork</h4>
                <p>
                Artificial Intelligence I, Introduction to Data Science, Foundations of Blockchains
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Army Institute of Technology(University of Pune)</h3>
                <p className="info">Bachelor of Engineering in Electronics & Telecommunication <span>•</span> <em className="date">July 2012 - May 2016</em></p>
                <h4>CourseWork</h4>
                <p>
                Data Structures and Algorithm, Network Theory, Object Oriented Programming, Computer Networks, 
                System Programming and Operating Systems, Artificial Intelligence 
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Oracle </h3>
                <p className="info">Senior Consultant <span>•</span> <em className="date">Jan 2021 – Aug 2021</em></p>
                <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"• Worked as a Full Stack Developer in Fintech Domain, gained expertise in FLEXCUBE - Oracle’s banking product.\n• Led a team of 4 developers to develop new features for one of the fastest growing small finance bank in India. \n• Worked on performance tuning of batch processing, reducing the average time by 20 percent."}</p>
                <p className="info">Staff Consultant <span>•</span> <em className="date">Jan 2018 – Dec 2020</em></p>
                <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"• Developed features of banking modules like Payments, CASA, Loans, Term Deposit, CIF, Settlements and Reports and database objects (procedure, triggers, and functions) for functional processing of complex data.\n• Worked on time sensitive requirements based on RBI guidelines related to Loan’s moratorium due to Covid-19.Changes impacted around 2 million customer accounts of different client banks. Received an award of “The Wonderful Wizard” for my contribution.\n• Worked on time sensitive requirements based on RBI guidelines related to Loan’s moratorium due to Covid-19. Changes impacted around 2 million customer accounts of different client banks. Received an award of “The Wonderful Wizard” for my contribution."}</p>
                <p className="info">Associate Consultant <span>•</span> <em className="date">Sept 2016 – Dec 2017</em></p>
                <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"• Worked on Machine Learning using neural networks and logistic regression to limit the number of test cases to be run after a code change though we were able to reduce the count from 250 test cases to 100-125 test cases per code change.\n• Developed various APIs which would integrate the FLEXCUBE product as per the bank’s specific requirements for different modules in Airtel digital banking.\n• Integrated third - party system to apply service charge to Oracle’s banking product. Customized over 100 types of transactions for Barclays Bank"}</p>
              
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Cummins Technology</h3>
                <p className="info">Project Intern <span>•</span> <em className="date">Aug 2015 - May 2016</em></p>                
                <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"• Implementation of BDM protocol in ECU (Engine Control Unit) of an engine.\n• Programmed the 16 bit microprocessor to act as a fail-safe on the 8 bit microprocessor using Embedded C.The 8bit processor would be programmed to be in its default state if any fail is detected by the 16 bit processor.\nThe project helped in increasing the life of an ECU for the engines produced by Cummins."}</p>               
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Tata Motors</h3>
                <p className="info">Project Intern <span>•</span> <em className="date">Nov 2014 - Dec 2014</em></p>
                <p style={{'whiteSpace': 'pre-wrap'}}>
                  {"• Introduction to PLC, uses in the Industrial electromechanical process and Automation.\n• With help of PLC, increased the safety of workers working on industrial machinery ."}</p>         
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}