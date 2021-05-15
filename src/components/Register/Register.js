import { useState, useEffect, useRef } from 'react';
import '../SignIn/SignIn.css';

const Register = ({ setState, setUser }) => {
  const [person, setPerson] = useState({ email: '', name: '', password: '' });
  const nameRef = useRef();

  const enterKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', enterKeyPress);
    nameRef.current.focus();
    return () => {
      window.removeEventListener('keypress', enterKeyPress);
    };
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const onSubmit = () => {
    if (person.email && person.password && person.name) {
      fetch('https://food-backend-api-3000.herokuapp.com/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person),
      })
        .then((response) => response.json())
        .then(({ email, name, entries, joined, id }) => {
          if (!email) return console.log('Error');

          if (email.toLowerCase() === person.email.toLowerCase()) {
            setUser({ email, name, entries, joined, id });
            setState({ signin: false, register: false });
          }
        });
    } else {
      alert('Please fill in all the details');
    }
  };

  return (
    <>
      <article className="form dark-blue shadow-5">
        <div className="flex flex-column mv3 items-center">
          <h3>Register</h3>
          <br />
          <div className="form-control">
            <label htmlFor="name">Name : </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              maxLength="100"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <p className="pointer tc grow mv3" onClick={onSubmit}>
            Create New User
          </p>
          <p
            className="pointer tc grow mv2"
            onClick={() => {
              setState({ signin: true, register: false });
            }}
          >
            Back To Login Page
          </p>
        </div>
      </article>
    </>
  );
};

export default Register;
