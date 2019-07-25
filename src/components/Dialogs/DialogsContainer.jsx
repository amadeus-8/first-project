import {sendMessageCreator} from '../../redux/dialogs-reducer.js';
import Dialogs from "./Dialogs.jsx";
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import {compose} from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
