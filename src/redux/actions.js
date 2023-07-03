import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://649eabd6245f077f3e9cc05c.mockapi.io";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/contacts");
      return await resp.data;
    } catch (err) {
      console.error(err.stack);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const resp = await axios.post("/contacts", contact);
      return await resp.data;
    } catch (err) {
      console.error(err.stack);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${id}`);
      return await resp.data;
    } catch (err) {
      console.error(err.stack);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
