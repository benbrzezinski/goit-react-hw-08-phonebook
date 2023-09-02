import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return await res.data;
    } catch (err) {
      console.error(err.message);
      return thunkAPI.rejectWithValue("Error getting contacts");
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", contact);
      return await res.data;
    } catch (err) {
      console.error(err.message);
      return thunkAPI.rejectWithValue("Error adding contact");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return await res.data;
    } catch (err) {
      console.error(err.message);
      return thunkAPI.rejectWithValue("Error deleting contact");
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, credentials }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, credentials);
      return await res.data;
    } catch (err) {
      console.error(err.message);
      return thunkAPI.rejectWithValue("Error updating contact");
    }
  }
);
