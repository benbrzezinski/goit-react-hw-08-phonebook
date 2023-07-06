import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().startsWith(filter.toLowerCase().trim())
    );
  }
);
