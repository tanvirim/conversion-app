const Input = ({ value, scale, onChangeHandler }) => {
  return (
    <>
      <fieldset>
        <legend>Enter {scale}</legend>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChangeHandler(e, scale);
          }}
        />
      </fieldset>
    </>
  );
};

export default Input;
