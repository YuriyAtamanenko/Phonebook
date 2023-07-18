import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsAPI';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.fetchAll();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.addContact(newContact);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'ontacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.deleteContact(contactId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
