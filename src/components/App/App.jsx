import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAll } from 'redux/operations';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { Container, HeadTitle, Title, Box } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Box>
      <Container>
        <HeadTitle>Phonebook</HeadTitle>
        <ContactForm />

        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Container>
    </Box>
  );
}
