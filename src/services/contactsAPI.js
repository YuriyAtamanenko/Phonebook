import axios from 'axios';

axios.defaults.baseURL = 'https://64a2c9c7b45881cc0ae5b42c.mockapi.io';

export async function fetchAll() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  console.log(newContact);
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
