const Header = ({ setState, setFoodItems, setUrl, setInput, setUser }) => {
  return (
    <nav className="flex justify-end">
      <button
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
        className="f5 link dim black pa3 mr3 br3 bg-blue"
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Header;
