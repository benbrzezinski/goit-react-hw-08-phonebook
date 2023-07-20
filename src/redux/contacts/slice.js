import { createSlice } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./actions";

const initialState = {
  items: [],
  isLoading: false,
  isEditing: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setIsContactEditing(state, action) {
      state.isEditing = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const i = state.items.findIndex(({ id }) => id === action.payload.id);
        state.items.splice(i, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const i = state.items.findIndex(({ id }) => id === action.payload.id);
        state.items.splice(i, 1, action.payload);
      })
      .addMatcher(
        action =>
          action.type.startsWith("contacts") &&
          action.type.endsWith("/pending"),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith("contacts") &&
          action.type.endsWith("/fulfilled"),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith("contacts") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setIsContactEditing } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
