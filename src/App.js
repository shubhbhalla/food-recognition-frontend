import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Data from './components/Data/Data';
import Image from './components/Image/Image';
import FoodList from './components/FoodList/FoodList';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

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

  const onFoodImageSubmit = () => {
    setUrl(input);
    fetch('http://localhost:3000/apicall', {
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
          fetch(`http://localhost:3000/fooditem`, {
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
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <SignIn setState={setState} setUser={setUser} />
    </div>
  ) : state.register ? (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Register setState={setState} setUser={setUser} />
    </div>
  ) : (
    <div className="App ttc">
      <Header
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
      />
      <FoodList items={foodItems} />
      <Image url={url} />
    </div>
  );
}

export default App;
