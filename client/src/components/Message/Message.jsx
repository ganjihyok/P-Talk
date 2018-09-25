import React from 'react';
import PropTypes from 'prop-types';

// const style = require('./Message.css');

const Message = ({ message, author }) => (
  <p>
    <i>
      {author}
      &nbsp;
    </i>
    :&nbsp;
    {message}
  </p>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
