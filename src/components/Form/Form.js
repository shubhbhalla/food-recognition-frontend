const Form = ({ link, handleInput, handleSubmit }) => {
  return (
    <div className="pa4-l">
      <div className="mw7 center pa4 br2-ns b--black-10">
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <input
              className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
              placeholder="URL of Image containing Food Item"
              type="text"
              value={link}
              onChange={(e) => {
                handleInput(e.target.value);
              }}
            />
            <button
              className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-near-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns bg-gray"
              onClick={handleSubmit}
            >
              Detect
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
