import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage/AddMessage';
import actions from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(actions.addMessage(message, author));
  }
});

const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);

export default AddMessage;
