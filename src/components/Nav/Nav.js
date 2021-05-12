const Header = ({ setState, setFoodItems, setUrl, setInput, setUser }) => {
  return (
    <nav className="db dt-l w-100 border-box pt4 ph5-l">
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <p
          onClick={() => {
            setUrl('');
            setFoodItems([]);
            setUser({
              name: '',
              email: '',
              id: 0,
              date: 0,
              entries: 0,
            });
            setInput('');
            setState({ signin: true, register: false });
          }}
          className="link pointer grow dim near-black f6 f5-l dib b "
        >
          Sign Out
        </p>
      </div>
    </nav>
  );
};

export default Header;
