import React from 'react';
import PropTypes from 'prop-types';

const style = require('./AddMessage.css');

const AddMessage = (props) => {
  let input;

  return (
    <section className={style.newMessages}>
      <input
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.dispatch(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default AddMessage;
