import './FoodList.css';

const FoodList = ({ items }) => {
  return (
    <>
      <h3 className="ma3">{items.length ? `Food Items Detected` : ``}</h3>
      <ul className="users">
        {items.map(
          ({ id, name, value, calories, protein, carbs, fat, grams }) => {
            return (
              <li
                style={{
                  background: 'linear-gradient(to right, #ffdde1, #ee9ca7)',
                }}
                key={id}
                className="item"
              >
                <p>{`-- ${name} -- `}</p>
                <p>{`Probability (${value})`}</p>
                <p>{grams ? 'per ' + grams + ' gm' : 'N/A'}</p>
                <p>{`Calories (${calories ? calories + ' kCal' : 'N/A'})`}</p>
                <p>{`Protein (${protein ? protein + ' gm' : 'N/A'})`}</p>
                <p>{`Carbs (${carbs ? carbs + ' gm' : 'N/A'})`}</p>
                <p>{`Fat (${fat ? fat + ' gm' : 'N/A'})`}</p>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default FoodList;
