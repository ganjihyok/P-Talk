import types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
});

module.exports = {
  addUser,
  addMessage,
  messageReceived,
  populateUsersList
};
