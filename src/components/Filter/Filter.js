import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactFiltering } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Label>
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(contactFiltering(e.currentTarget.value))}
        placeholder="Find contacts by name"
      ></Input>
    </Label>
  );
}
