import React from "react";
import Input from "../Input";
import "./calculator.style.css";

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
      pound = mass * 2.20462;
      ounce = mass * 35.274;
      carat = mass * 5000;
    } else if (scale === p) {
      kg = mass / 2.20462;
      pound = mass;
      ounce = mass * 16;
      carat = mass * 2268;
    } else if (scale === o) {
      kg = mass / 35.274;
      pound = mass / 16;
      ounce = mass;
      carat = mass * 141.7;
    } else {
      carat = mass;
      kg = mass / 5000;
      pound = mass / 2268;
      ounce = mass / 141.7;
    }

    return (
      <div className="container">
        <Input scale={k} onChangeHandler={this.onChangeHandler} value={kg} />

        <Input scale={p} onChangeHandler={this.onChangeHandler} value={pound} />

        <Input scale={o} onChangeHandler={this.onChangeHandler} value={ounce} />

        <Input scale={c} onChangeHandler={this.onChangeHandler} value={carat} />
      </div>
    );
  }
}
