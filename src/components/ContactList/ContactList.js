import React from 'react';

import { AiOutlineMinus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectFilter, selectContacts } from 'redux/selectors';
import { List, Item, Contact, DeleteButton } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectFilter);

  const filteredContscts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <List>
      {filteredContscts.map(({ name, phone, _id }) => (
        <Item key={_id}>
          <Contact>
            {name}: {phone}
          </Contact>

          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(_id))}
          >
            <AiOutlineMinus size={24} />
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
}
