import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';

const style = require('./MessagesList.css');

const MessagesList = ({ messages }) => (
  <section id="messages-list" className={style.messages_list}>
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
    </ul>
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;
