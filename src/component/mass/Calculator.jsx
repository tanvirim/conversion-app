import React from "react";
import MassInput from "./MassInput";

export default class MassCalculator extends React.Component {
  state = {
    mass: "",
    scale: "",
  };

  scaleName = {
    k: "kg",
    p: "pound",
    o: "ounce",
    c: "carat",
  };

  onChangeHandler = (e, scale) => {
    console.log(e.target.value, scale);

    this.setState({
      mass: e.target.value,
      scale: scale,
    });
  };

  render() {
    const { mass, scale } = this.state;
    const { k, p, o, c } = this.scaleName;

    let kg = "";
    let pound = "";
    let ounce = "";
    let carat = "";

    if (scale === k) {
      kg = mass;
      pound = (mass * 2.20462).toFixed(2);
      ounce = (mass * 35.274).toFixed(2);
      carat = (mass * 5000).toFixed(2);
    } else if (scale === p) {
      kg = mass;
      pound = (mass / 2.205).toFixed(2);
      ounce = (mass * 16).toFixed(2);
      carat = (mass * 2268).toFixed(2);
    } else if (scale === o) {
      kg = (mass / 35.274).toFixed(2);
      pound = (mass / 16).toFixed(2);
      ounce = mass;
      carat = (mass * 141.7).toFixed(2);
    } else {
      carat = mass;
      kg = (mass / 5000).toFixed(2);
      pound = (mass / 2268).toFixed(2);
      ounce = (mass / 141.7).toFixed(2);
    }

    return (
      <>
        <MassInput scale={k} onChangeHandler={this.onChangeHandler} mass={kg} />

        <MassInput
          scale={p}
          onChangeHandler={this.onChangeHandler}
          mass={pound}
        />

        <MassInput
          scale={o}
          onChangeHandler={this.onChangeHandler}
          mass={ounce}
        />

        <MassInput
          scale={c}
          onChangeHandler={this.onChangeHandler}
          mass={carat}
        />
      </>
    );
  }
}
