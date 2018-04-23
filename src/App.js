import React, { Component } from "react";
import Nav from "./components/nav";
//import Card from "./components/card";
//import Header from "./components/header";
import Icons from "./icons.json";
import "./App.css";

class App extends Component {
  state = {
    Icons,
    clickedIcons: [],
    score: 0,
    victory: 15,
    message: ""
  };

  render() {
    return <Nav score={this.state.score} message={this.state.message} />;
  }
}

export default App;
