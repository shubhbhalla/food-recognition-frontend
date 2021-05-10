const Form = ({ link, handleInput, handleSubmit }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-60 flex justify-center pa4 br3 shadow-5">
          <input
            type="text"
            placeholder="Input the Url of an Image of Food"
            className="f5 pa2 w-60"
            value={link}
            onChange={(e) => {
              handleInput(e.target.value);
            }}
          />
          <button
            className="w-30 f6 link ph3 pv2 dib black bg-light"
            onClick={handleSubmit}
          >
            Detect Food Items
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
