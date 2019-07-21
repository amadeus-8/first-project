import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer.js';
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
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
