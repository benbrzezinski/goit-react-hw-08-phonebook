import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./actions";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: true,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const i = state.items.findIndex(({ id }) => id === payload.id);
        state.items.splice(i, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        action => action.type.endsWith("/pending"),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
