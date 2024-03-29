import { useState, useEffect, useRef } from 'react';
import './SignIn.css';

const SignIn = ({ setState, setUser, setLoading }) => {
  const [person, setPerson] = useState({ email: '', password: '' });
  const emailRef = useRef();

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

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const onSubmit = () => {
    setLoading(true);
    if (person.email && person.password) {
      fetch('https://food-backend-api-3000.herokuapp.com/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person),
      })
        .then((response) => response.json())
        .then((user) => {
          if (!user.email) return alert('Wrong combination');

          const { email, name, entries, joined, id } = user;
          if (email.toLowerCase() === person.email.toLowerCase()) {
            setUser({ email, name, entries, joined, id });
            setState({ signin: false, register: false });
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      alert('Please fill in all the details');
    }
  };

  return (
    <article className="form dark-blue shadow-5">
      <div className="flex flex-column mv3 items-center">
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
            ref={emailRef}
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
        <p className="pointer mv3 tc grow" onClick={onSubmit}>
          Sign In
        </p>
        <p
          className="pointer mv2 tc grow"
          onClick={() => {
            setState({ signin: false, register: true });
          }}
        >
          New User
        </p>
      </div>
    </article>
  );
};

export default SignIn;
