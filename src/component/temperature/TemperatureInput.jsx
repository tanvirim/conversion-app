const TemperatureInput = ({ temperature, scale, onChangeHandler }) => {
  return (
    <>
      <fieldset>
        <legend>Enter Temperature in {scale}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => {
            onChangeHandler(e, scale);
          }}
        />
      </fieldset>
    </>
  );
};

export default TemperatureInput;
