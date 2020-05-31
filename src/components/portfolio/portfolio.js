import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/portfolio/SortingAlgo.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Sorting Algorithms Visualiser</h5>
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-SortingAlgo.jpg" alt="" />
              <div className="description-box">
                <h4>Sorting Algorithm Visualiser</h4>
                <p>This is a sorting algorithm visualizer which visualizes how different sorting algorithms work.
                In this project I have visualized most common algorithms like Bubble Sort, Quick Sort, Insertion Sort, Selection sort.
                In addition, I have also visualized some of the lesser known algorithms like Cocktail Sort, Shell Sort, Gnome Sort.
                This project is a react app and uses the p5.js library to visualize the algorithms and the web page is hosted on the GitHub pages
                </p>
                <span className="categories"><i className="fa fa-info-circle" />JavaScript, React, p5.js</span>
              </div>
              <div className="link-box">
                <a href="https://dhwanitsharma.github.io/SortingAlgorithmVisualizer" target="_blank" rel ="noopener noreferrer">Visualizer</a>
                <a href="https://github.com/dhwanitsharma/SortingAlgorithmVisualizer" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            
          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}