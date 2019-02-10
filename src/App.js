import React, { Component } from 'react';
import parth from './parthBackground.jpeg';
import lawrence from './lawrence.jpg';
import './App.css';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={parth} className="App-logo" alt="logo" />
          <h1 className="App-title">Zumper Sucks</h1>
        </header>
        <About header='Parth' description="Parth is a junior at UC Berkeley." profPic={parth} />
        <About header='Lawrence' description="Lawrence is a senior at UC Berkeley." profPic={lawrence} />
      </div>
    );
  }
}

export default App;
