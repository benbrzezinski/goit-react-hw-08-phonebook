import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/contacts");
      return await resp.data;
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
      const resp = await axios.post("/contacts", contact);
      return await resp.data;
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
      const resp = await axios.delete(`/contacts/${id}`);
      return await resp.data;
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
      const resp = await axios.patch(`/contacts/${id}`, credentials);
      return await resp.data;
    } catch (err) {
      console.error(err.message);
      return thunkAPI.rejectWithValue("Error updating contact");
    }
  }
);
