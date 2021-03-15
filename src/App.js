import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu.js';
import Pieces from './components/Pieces.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      thoughtProcess: "mainMenu",
    }

  }

  thoughtProcessChange(newProcess) {
    this.setState({thoughtProcess: newProcess});
  }

  thoughtProcessSelect(process) {
    switch(process) {
      case "mainMenu" :    return <MainMenu thoughtProcessChange={this.thoughtProcessChange.bind(this)} />;break;
      case "pieces" :    return <Pieces thoughtProcessChange={this.thoughtProcessChange.bind(this)} />;break;
      default :            return <MainMenu thoughtProcessChange={this.thoughtProcessChange.bind(this)}/>;break;
    }
  }

  render() {


    return (
      <div className="App">

        {this.thoughtProcessSelect(this.state.thoughtProcess)}

      </div>
    );
  }
}

export default App;
