import React, { Component } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;