import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  //   toggleCompletedRequest,
  //   toggleCompletedSuccess,
  //   toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addNewContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  //[toggleCompletedSuccess]: (state, { payload }) => state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addNewContactRequest]: () => true,
  [addNewContactSuccess]: () => false,
  [addNewContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  //   [toggleCompletedRequest]: () => true,
  //   [toggleCompletedSuccess]: () => false,
  //   [toggleCompletedError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
