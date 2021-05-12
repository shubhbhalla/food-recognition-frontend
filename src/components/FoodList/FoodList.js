import './FoodList.css';

const FoodList = ({ items }) => {
  return (
    <>
      <h3 className="ma3">{items.length ? `Food Items Detected` : ``}</h3>
      <ul className="users">
        {items.map(({ id, name, value }) => {
          return (
            <li
              style={{
                background: 'linear-gradient(to right, #ffdde1, #ee9ca7)',
              }}
              key={id}
              className="item"
            >
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
