const Data = ({ name, entries }) => {
  return (
    <div className="dark-blue f2 pa3 ma3">{`${name}, you have detected ${entries} food items!`}</div>
  );
};

export default Data;
