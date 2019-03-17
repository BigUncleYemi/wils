import React, { Component } from 'react';
import './assets/css/App.css';
import * as img from './assets/img/index'
import Header from './components/Header';
import Prob from './components/Prob';
import About from './components/About';
import Start from './components/Start';
import BNav from './components/BottomNav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="bg-track">
          <Header {...{img}} />
          <Prob {...{img}} />
        </div>
        <About {...{img}} />
        <Start {...{img}} />
        <BNav {...{img}} />
        <Footer />
      </div>
    );
  }
}

export default App;
