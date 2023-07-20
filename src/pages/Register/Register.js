import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { Form, Input, Label, Submit } from './Register.styled';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>
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
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </Label>
        <Submit type="submit">Sign up</Submit>
      </Form>
    </section>
  );
}
