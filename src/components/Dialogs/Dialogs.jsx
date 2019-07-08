import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer.js';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = state.messages.map(m => <Message message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea placeholder='Enter your message'
                      onChange={onNewMessageChange}
                      value={newMessageBody}></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
