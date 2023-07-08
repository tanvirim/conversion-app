import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { converter, toCelcius, toFarhenheit } from "../lib/converter";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "",
  };

  scaleName = {
    c: "celcious",
    f: "farhenheit",
  };

  onChangeHandler = (e, scale) => {
    console.log(e.target.value);

    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === this.scaleName.f
        ? converter(temperature, toCelcius)
        : temperature;
    const farhenheit =
      scale === this.scaleName.c
        ? converter(temperature, toFarhenheit)
        : temperature;

    return (
      <>
        <TemperatureInput
          scale={this.scaleName.c}
          onChangeHandler={this.onChangeHandler}
          temperature={celsius}
        />

        <TemperatureInput
          scale={this.scaleName.f}
          onChangeHandler={this.onChangeHandler}
          temperature={farhenheit}
        />

        <BoilingVerdict celcious={parseFloat(temperature)} />
      </>
    );
  }
}
