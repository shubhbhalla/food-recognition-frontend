import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Data from './components/Data/Data';
import Image from './components/Image/Image';
import FoodList from './components/FoodList/FoodList';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [state, setState] = useState({
    signin: true,
    register: false,
  });
  const [user, setUser] = useState({
    name: '',
    email: '',
    id: 0,
    date: 0,
    entries: 0,
  });

  const testLink1 = () => {
    setInput(
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
    );
  };

  const testLink2 = () => {
    setInput('https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg');
  };

  const testLink3 = () => {
    setInput(
      'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'
    );
  };

  const testLink4 = () => {
    setInput(
      'https://everylittlecrumb.com/wp-content/uploads/pinksaucepasta-scaled.jpg'
    );
  };

  const onFoodImageSubmit = () => {
    setUrl(input);
    fetch('https://food-backend-api-3000.herokuapp.com/apicall', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: input }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.outputs) {
          const filteredItems = response.outputs[0].data.concepts.filter(
            (e) => e.value > 0.9
          );

          // if we could not identify any food items with more than 0.9 probability
          if (!filteredItems.length) {
            setFoodItems([]);
            return;
          }

          const id = user.id;
          const items = filteredItems.length;
          fetch(`https://food-backend-api-3000.herokuapp.com/fooditem`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id,
              items,
            }),
          })
            .then((response) => response.json())
            .then((number) => setUser({ ...user, entries: number }))
            .catch(console.log);
          setFoodItems(filteredItems);
        } else {
          setFoodItems([]);
        }
      })
      .catch((err) => {
        setFoodItems([]);
        console.log(err);
      });
  };

  return state.signin ? (
    <div>
      <h1 className="tc fw4 pa5 ma4 near-black lh-solid lh-copy">
        This App will detect Food Items in your image URL
      </h1>
      <SignIn setState={setState} setUser={setUser} />
      <Footer />
    </div>
  ) : state.register ? (
    <div>
      <h1 className="tc fw4 pa5 ma4 near-black lh-solid lh-copy">
        This App will detect Food Items in your image URL
      </h1>
      <Register setState={setState} setUser={setUser} />
      <Footer />
    </div>
  ) : (
    <div className="App ttc">
      <Nav
        setState={setState}
        setFoodItems={setFoodItems}
        setInput={setInput}
        setUrl={setUrl}
        setUser={setUser}
      />
      <Data name={user.name} entries={user.entries} />
      <Form
        link={input}
        handleInput={setInput}
        handleSubmit={onFoodImageSubmit}
        testLink1={testLink1}
        testLink2={testLink2}
        testLink3={testLink3}
        testLink4={testLink4}
      />
      <FoodList items={foodItems} />
      <Image url={url} />
    </div>
  );
}

export default App;
