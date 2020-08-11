import React, { Component } from 'react';
import './App.scss';
import HeadPart from './Components/HeadPart';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';

class App extends Component {
  render() {
    return(
    <main className="app">
      <HeadPart name = "KAMIL 24YO"/>
      <AboutMe />
      <Education />
    </main>
    );
  }
}

export default App;
