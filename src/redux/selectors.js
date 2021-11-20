import { createSelector } from "@reduxjs/toolkit";

export const getContactsItems = (state) => state.contacts.items;
export const getContactsFilter = (state) => state.contacts.filter;
export const getContactsError = (state) => state.contacts.error;
export const getContactsLoading = (state) => state.contacts.loading;

export const getContactList = createSelector(
  [getContactsItems, getContactsFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
