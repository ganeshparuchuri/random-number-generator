import { Component } from "react";

import "./index.css";

class Apps extends Component {
  state = { randomNum: 0 };
  generatorClick = () => {
    const random = Math.ceil(Math.random() * 100);
    this.setState({ randomNum: random });
  };
  render() {
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.generatorClick}>
            Generate
          </button>
          <h1 className="heading">{this.state.randomNum}</h1>
        </div>
      </div>
    );
  }
}

export default Apps;
