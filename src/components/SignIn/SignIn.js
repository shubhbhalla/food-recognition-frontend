import { useState, useEffect } from 'react';
import './SignIn.css';

const SignIn = ({ setState, setUser }) => {
  const [person, setPerson] = useState({ email: '', password: '' });

  const enterKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', enterKeyPress);
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
    if (person.email && person.password) {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person),
      })
        .then((response) => response.json())
        .then((user) => {
          if (!user.email) return console.log('Error');

          const { email, name, entries, joined, id } = user;
          if (email.toLowerCase() === person.email.toLowerCase()) {
            setUser({ email, name, entries, joined, id });
            setState({ signin: false, register: false });
          }
        })
        .catch(console.log);
    } else {
      alert('Please fill in all the details');
    }
  };

  return (
    <>
      <article className="form shadow-4">
        <div className="flex flex-column items-center">
          <h3>Existing Users Login</h3>
          <br />
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
          <button type="submit" className="btn ma2" onClick={onSubmit}>
            Sign In
          </button>
          <p
            className="pointer ma2 tc grow"
            onClick={() => {
              setState({ signin: false, register: true });
            }}
          >
            New User
          </p>
        </div>
      </article>
    </>
  );
};

export default SignIn;
