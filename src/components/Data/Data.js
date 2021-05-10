const Data = ({ name, entries }) => {
  return (
    <div className="white f2">{`${name}, you have detected ${entries} food items!`}</div>
  );
};

export default Data;
