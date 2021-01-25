import React from "react";
import SOUNDS from "./data";
import SwitchButton from "./SwitchButton";
import DrumPad from "./DrumPad";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: SOUNDS,
      currentSongText: "",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleKeyboardKeys = this.handleKeyboardKeys.bind(this);
  }

  handleButtonClick(key, song) {
    return () => {
      document.getElementById(key).currentTime = 0;
      document.getElementById(key).play();
      this.setState({
        currentSongText: song,
      });
    };
  }

  handleKeyboardKeys(e) {
    const pad = this.state.drumPads.find(
      (item) => item.key === e.key.toUpperCase()
    );
    if (pad) document.getElementById(pad.song).click();
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyboardKeys);
  }

  render() {
    return (
      <div id="drum-machine">
        <div className="app_title">
          <h1>Drum Machine App</h1>
        </div>
        <div className="display-container">
          <div id="display-pads">
            {this.state.drumPads.map((item) => (
              <DrumPad
                song={item.song}
                key={item.key}
                drumKey={item.key}
                handleClick={this.handleButtonClick}
                url={item.url}
              />
            ))}
          </div>
          <p id="display" className="current-text">
            {this.state.currentSongText}
          </p>
          <SwitchButton />
        </div>
      </div>
    );
  }
}

export default DrumMachine;
