import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Form, Input, Label, Submit } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactAttached = contacts.find(contact => contact.name === name);

    if (contactAttached) {
      toast.error(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        phone,
      };

      dispatch(addContact(contact));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChangeInput}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Submit type="submit">Add contact</Submit>
      </Form>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        closeOnClick
        theme="colored"
      />
    </>
  );
}
