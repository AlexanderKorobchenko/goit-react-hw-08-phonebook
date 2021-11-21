// import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

// const getTotalTodoCount = state => {
//   const todos = getAllTodos(state);
//   return todos.length;
// };

// const getCompletedTodoCount = createSelector([getAllTodos], todos => {
//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// });

const contactsSelectors = {
  getLoading,
  getFilter,
  getAllContacts,
  //   getTotalTodoCount,
  //   getCompletedTodoCount,
};
export default contactsSelectors;
