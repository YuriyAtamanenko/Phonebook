import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAll } from 'redux/operations';
import { HeadTitle, Title } from './Contacts.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <section>
      <HeadTitle>Phonebook</HeadTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </section>
  );
}
