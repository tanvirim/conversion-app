import React from "react";
import "./App.css";

import TemperatureCalculator from "./component/temperature/Calculator";
import MassCalculator from "./component/mass/Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
    };
  }

  handleSelectChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { selectedValue } = this.state;

    return (
      <div className="App">
        <h1>Conversion </h1>
        <select value={selectedValue} onChange={this.handleSelectChange}>
          <option value="">Select an option</option>
          <option value="temperature">Temperature</option>
          <option value="length">Length</option>
          <option value="mass">Mass</option>
          <option value="energy">Energy</option>
          <option value="pressure">Pressure</option>
          <option value="time">Time</option>
          <option value="velocity">Velocity</option>
        </select>

        {selectedValue === "temperature" && <TemperatureCalculator />}
        {selectedValue === "mass" && <MassCalculator />}
      </div>
    );
  }
}

export default App;
