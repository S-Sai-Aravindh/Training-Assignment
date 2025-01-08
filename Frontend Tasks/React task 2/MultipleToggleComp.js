import React, { Component } from "react";
import Zoro from "../Assests/zoro.jpg";
import Luffy from "../Assests/luffy.jpg";
import Sanji from "../Assests/sanji.jpg";
import Robin from "../Assests/robin.jpg";

class MultipleToggleComp extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: Zoro,
      currentTitle: "Roronoa Zoro",
    };
  }

  switchimg2 = (character) => {
    switch (character) {
      case "Sanji":
        this.setState({
          currentImage: Sanji,
          currentTitle: "Vinsmoke Sanji",
        });
        break;
      case "Luffy":
        this.setState({
          currentImage: Luffy,
          currentTitle: "Monkey D. Luffy",
        });
        break;
      case "Robin":
        this.setState({
          currentImage: Robin,
          currentTitle: "Nico Robin",
        });
        break;
      default:
        this.setState({
          currentImage: Zoro,
          currentTitle: "Roronoa Zoro",
        });
    }
  };

  render() {
    const { currentImage, currentTitle } = this.state;

    return (
      <div>
        <hr></hr>
        <div className="task2">
          <div className="switchbox2">
            <img src={currentImage} alt={currentTitle} id="img2" />
            <h3 id="imgtitle">{currentTitle}</h3>
            <button
              type="button"
              className="task2button"
              onClick={() => this.switchimg2("Zoro")}
            >
              Roronoa Zoro
            </button>
            <button
              type="button"
              className="task2button2"
              onClick={() => this.switchimg2("Sanji")}
            >
              Vinsmoke Sanji
            </button>
            <button
              type="button"
              className="task2button3"
              onClick={() => this.switchimg2("Luffy")}
            >
              Monkey D. Luffy
            </button>
            <button
              type="button"
              className="task2button4"
              onClick={() => this.switchimg2("Robin")}
            >
              Nico Robin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleToggleComp;
