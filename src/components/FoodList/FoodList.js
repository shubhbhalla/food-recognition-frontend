import './FoodList.css';

const FoodList = ({ items }) => {
  return (
    <>
      <h3 className="ma3">{items.length ? `Food Items Detected` : ``}</h3>
      <ul className="users">
        {items.map(({ id, name, value }) => {
          return (
            <li key={id} className="item">
              <p>{`-- ${name} -- `}</p>
              <p>{`Probability(${value})`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FoodList;
