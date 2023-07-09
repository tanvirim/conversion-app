import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import {
  converter,
  fromCelsiusToFarhenheit,
  fromCelsiusToKelvin,
  fromFahrenheitToCelsius,
  fromFahrenheitToKelvin,
  fromKelvinToCelsius,
  fromKelvinToFarhenheit,
} from "../../lib/TempConverter";

export default class TemperatureCalculator extends React.Component {
  state = {
    temperature: "",
    scale: "",
  };

  scaleName = {
    c: "celsius",
    f: "farhenheit",
    k: "kelvin",
  };

  onChangeHandler = (e, scale) => {
    console.log(e.target.value, scale);

    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;

    const { c, f, k } = this.scaleName;

    let celsius = "";
    let farhenheit = "";
    let kelvin = "";

    if (scale === c) {
      celsius = temperature;
      farhenheit = converter(temperature, fromCelsiusToFarhenheit);
      kelvin = converter(temperature, fromCelsiusToKelvin);
    } else if (scale === f) {
      farhenheit = temperature;
      celsius = converter(temperature, fromFahrenheitToCelsius);
      kelvin = converter(temperature, fromFahrenheitToKelvin);
    } else {
      kelvin = temperature;
      celsius = converter(temperature, fromKelvinToCelsius);
      farhenheit = converter(temperature, fromKelvinToFarhenheit);
    }

    return (
      <>
        <TemperatureInput
          scale={c}
          onChangeHandler={this.onChangeHandler}
          temperature={celsius}
        />

        <TemperatureInput
          scale={f}
          onChangeHandler={this.onChangeHandler}
          temperature={farhenheit}
        />

        <TemperatureInput
          scale={k}
          onChangeHandler={this.onChangeHandler}
          temperature={kelvin}
        />

        <BoilingVerdict celcious={parseFloat(celsius)} />
      </>
    );
  }
}
