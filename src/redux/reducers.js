import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
} from "./actions.js";

const itemContactReducer = createReducer([], {
  [fetchContactsSuccess.type]: (state, actions) => actions.payload,
  [addContactsSuccess.type]: (state, action) => [...state, action.payload],
  [deleteContactSuccess.type]: (state, action) => {
    const filtered = state.filter((el) => el.id !== action.payload);
    return [...filtered];
  },
});

const filterContactReducer = createReducer("", {
  [filterContact.type]: (state, action) => action.payload,
});

const loadingContactReducer = createReducer(false, {
  [fetchContactsRequest.type]: () => true,
  [fetchContactsSuccess.type]: () => false,
  [fetchContactsError.type]: () => false,
  [addContactsRequest.type]: () => true,
  [addContactsSuccess.type]: () => false,
  [addContactsError.type]: () => false,
  [deleteContactRequest.type]: () => true,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => false,
});

const errorContactReducer = createReducer("", {
  [fetchContactsError.type]: (state, action) => action.payload,
  [addContactsError.type]: (state, action) => action.payload,
  [deleteContactError.type]: (state, action) => action.payload,
  [fetchContactsRequest.type]: () => "",
  [addContactsRequest.type]: () => "",
  [deleteContactRequest.type]: () => "",
});

export default combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
  loading: loadingContactReducer,
  error: errorContactReducer,
});
