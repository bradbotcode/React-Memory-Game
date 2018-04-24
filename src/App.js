import React, { Component } from "react";
import Nav from "./components/nav";
import Card from "./components/card";
import Header from "./components/header";
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

  shuffleIcons = id => {
    let clickedIcons = this.state.clickedIcons;

    if (clickedIcons.includes(id)) {
      this.setState({
        clickedIcons: [],
        score: 0,
        message: "Game Over, You Lost! Click an Icon to Start Again."
      });
      return;
    } else {
      clickedIcons.push(id);

      if (clickedIcons.length === 15) {
        this.setState({
          clickedIcons: [],
          score: 15,
          message: "You Win, Way to Go! But... Can You Do It Again?"
        });
        return;
      }
      this.setState({
        Icons,
        clickedIcons,
        score: clickedIcons.length,
        message: "Correct. Keep it up!"
      });

      Icons.sort(function() {
        return 0.5 - Math.random();
      });
    }
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} message={this.state.message} />
        <Header />
        <main className="container">
          {this.state.Icons.map(icon => (
            <Card
              image={icon.image}
              id={icon.id}
              shuffleIcons={this.shuffleIcons}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
