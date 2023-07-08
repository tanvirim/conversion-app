import React from "react";

const BoilingVerdict = ({ celcious = 0 }) => {
  if (celcious >= 100) {
    return <p>water will boil</p>;
  } else {
    return <p>water will not boil</p>;
  }
};

export default BoilingVerdict;
