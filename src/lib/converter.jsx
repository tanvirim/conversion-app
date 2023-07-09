export const fromCelsiusToFarhenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
export const fromFahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
export const fromFahrenheitToKelvin = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius + 273.15;
};

export const fromCelsiusToKelvin = (celsious) => {
  return celsious + 273.15;
};

export const fromKelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

export const fromKelvinToFarhenheit = (kelvin) => {
  return (kelvin - 273.15) * (9 / 5) + 32;
};

export const converter = (temperature, convertTo) => {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output = convertTo(input);

  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
};
