import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Form, Input, Label, Submit } from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Log into existing account</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Label>
        <Submit type="submit">Log In</Submit>
      </Form>
    </>
  );
}
