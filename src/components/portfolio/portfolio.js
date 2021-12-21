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
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/novelcoronavirus.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>CoronaVirus Voice Assistant</h5>
                          <p>Python</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/portfolio/CoronaTracker.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ethereum Corona Tracker</h5>
                          <p>Blockchain</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/TodoList.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ethereum ToDoList</h5>
                          <p>Blockchain</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/portfolio/reddit_logo_main.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Reddit Clone App</h5>
                          <p>Java</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt="" src="images/portfolio/flappyBird.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>NEAT Flappy Bird</h5>
                          <p>Python</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt="" src="images/portfolio/DinoGame.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>NEAT Dino Game</h5>
                          <p>Python</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt="" src="images/portfolio/premierleague.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Analysis of the EPL</h5>
                          <p>Python</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-09" title>
                      <img alt="" src="images/portfolio/Chicago-Crash.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Chicago Crash Data-Set EDA</h5>
                          <p>Python</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>  
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-10" title>
                      <img alt="" src="images/portfolio/KNN.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>K-Nearest Neighbors Classifier</h5>
                          <p>Python</p>
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

            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-novelcoronavirus.jpg" alt="" />
              <div className="description-box">
                <h4>CoronaVirus Voice Assistant</h4>
                <p>This project is python based project. The project uses voice recognition and pyaudio to reply to the user. It can answer the following questions: 
                  The total number of corona cases?,The total number of corona deaths?. 
                  It can also answer questions regarding specific countries like (Below example is for USA): The number of cases in USA.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />PYTHON, PYTTSX3, SPEECHRECOGNITION,PYAUDIO</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/CoronavirusVoiceAssistant" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}

            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-CoronaTracker.jpg" alt="" />
              <div className="description-box">
                <h4>Ethereum Corona Tracker</h4>
                <p>This project is Blockchain based project where I have created a Corona Tracker which can trace a person to the location he has visited during the pandemic. 
                  The idea aroung the app is that whenever a person visits a particular area/address in a sector, 
                  we will log is checkin in the blockchain with sector and the current zone status defined by the government.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />SOLIDITY, JAVASCRIPT, HTML5, GANACHE CLI, TRUFFLE SUITE</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/Ethereum_CoronaTracker" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}

            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-TodoList.jpg" alt="" />
              <div className="description-box">
                <h4>Ethereum ToDoList</h4>
                <p>This project is Blockchain based project where I have created a ToDo List application on the Ethereum blockchain. 
                  To read the pending tasks from the list do not cost any Gas. 
                  Adding a task or marking a task as complete requires Gas for each transaction made on the blockchain. 
                  I have implemented the Project on the personal Ethereum blockchain using Truffle FrameWork and Ganache. 
                  I have also used Metamask Chrome extention to integrate the account to perform the transactions on the blockchain involving Gas Price.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />SOLIDITY, JAVASCRIPT, HTML5, GANACHE CLI, TRUFFLE SUITE</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/ethereum_ToDoList" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}

            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-reddit_logo_main.jpg" alt="" />
              <div className="description-box">
                <h4>Reddit Clone App</h4>
                <p>This project is Spring-boot and angular based projects which is a clone of the reddit. 
                  The features implemented are User Signup with Verification mail, User login, Create Subreddit, Post, Comments for post, Voting system for each post, 
                  User activity to track comments and posts.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />JAVA, ANGULAR, MYSQL,SPRINGBOOT</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/RedditCloneApp_Backend" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}

            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-flappyBird.jpg" alt="" />
              <div className="description-box">
                <h4>NEAT Flappy Bird</h4>
                <p>This project is based on NeuroEvolution of Augmenting Topologies (NEAT), which outperforms the best fixed-topology method on a challenging benchmark reinforcement learning task. 
                  I have implemented the NE in a game of Flappy Bird where each generation has a population of 10 birds. 
                  The bias is changed slightly based on the highest performing bird. The performance criteria is the distance which a bird travelled in its lifetime. 
                  Each new generation in based on the strongest bird of the last generation with some minute changes.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />PYTHON, PYGAME, NEAT, VISUALIZE</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/NEAT_Flappy_Bird" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}

            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-DinoGame2.png" alt="" />
              <div className="description-box">
                <h4>NEAT Dino Game</h4>
                <p>This project is based on NeuroEvolution of Augmenting Topologies (NEAT), which outperforms the best fixed-topology method on a challenging benchmark reinforcement learning task. 
                  In this project have implemented the NE in a Dino game of chrome where each generation has a population of 20 dinosaurs. The bias is changed slightly based on the highest performing dinosaur.
                   The performance criteria is the distance which a dinosaur travelled in its lifetime. Each new generation in based on the strongest dinosaur of the last generation with some minute changes.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />PYTHON, PYGAME, NEAT, VISUALIZE</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/NEAT_Dino_Game" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}

            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-premierleague.jpg" alt="" />
              <div className="description-box">
                <h4>Analysis of the EPL</h4>
                <p>In this project I have tried to use the data of the last 3 seasons of the EPL for EDA regarding the most important stats which help in increasing the position of a team in a season. 
                  I have also built a model which predicts the number of goals scored by all the players. Used cluster labels to make a decision tree and trained using a random forest regressor. Was able to predicts
                  goals per player with mean square error of 0.7 error.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />PYTHON, sklearn, seaborn, numpy, pandas, requests, BeautifulSoup</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/An-analysis-of-the-EPL" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-08 End */}
            <div id="modal-09" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-Chicago-Crash.jpg" alt="" />
              <div className="description-box">
                <h4>Chicago Crash Data-Set EDA</h4>
                <p>This is an EDA, so I will delve into the data set and identify some useful insights and visualize them
                </p>
                <span className="categories"><i className="fa fa-info-circle" />PYTHON, pandas, seaborn, numpy, matplotlib</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/Chicago-Crash-Dataset-EDA" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-08 End */}
            <div id="modal-10" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-KNN.png" alt="" />
              <div className="description-box">
                <h4>K Nearest Neighbors Classifier</h4>
                <p>In this project, I have implemented a K-Nearest Neighbor classifier from scratch and use it on three datasets: iris dataset, banknotes dataset, and MNIST dataset.
                </p>
                <span className="categories"><i className="fa fa-info-circle" />PYTHON, pandas, seaborn, numpy, matplotlib, sklearn</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/dhwanitsharma/k-Nearest-Neighbors" target="_blank" rel ="noopener noreferrer">GitHub Link</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-08 End */}
            
          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}