const MassInput = ({ mass, scale, onChangeHandler }) => {
  return (
    <>
      <fieldset>
        <legend>Enter mass in {scale}</legend>
        <input
          type="text"
          value={mass}
          onChange={(e) => {
            onChangeHandler(e, scale);
          }}
        />
      </fieldset>
    </>
  );
};

export default MassInput;
