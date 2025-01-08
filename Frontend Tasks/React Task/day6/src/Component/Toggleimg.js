import React, { Component } from "react";
import "./style.css";
import Zoro from "../Assests/zoro.jpg";
import Luffy from "../Assests/luffy.jpg";

class Toggleimg extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: Zoro,
      currentAlt: "Zoro",
      currentTitle: "Zoro",
    };
  }

  switchimgs = () => {
    this.setState((prevState) => {
      if (prevState.currentAlt === "Zoro") {
        return {
          currentImage: Luffy,
          currentAlt: "Luffy",
          currentTitle: "Luffy",
        };
      } else {
        return {
          currentImage: Zoro,
          currentAlt: "Zoro",
          currentTitle: "Zoro",
        };
      }
    });
  };

  render() {
    const { currentImage, currentAlt, currentTitle } = this.state;

    return (
      <div>
        <h1>Task 1</h1>
        <div className="task1">
          <div className="switchbox">
            <img src={currentImage} alt={currentAlt} id="img1" />
            <h1 id="title1">{currentTitle}</h1>
            <button type="button" onClick={this.switchimgs}>
              Switch
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toggleimg;
