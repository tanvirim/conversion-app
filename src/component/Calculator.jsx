import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
  };

  onChangeHandler = (e) => {
    console.log(e.target.value);

    this.setState({
      temperature: e.target.value,
    });
  };
  render() {
    const { temperature } = this.state;
    return (
      <>
        <fieldset>
          <legend>Enter Temperature in Celcious</legend>
          <input
            type="text"
            value={temperature}
            onChange={this.onChangeHandler}
          />
        </fieldset>

        <BoilingVerdict celcious={parseFloat(temperature)} />
      </>
    );
  }
}
