import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import AddMessageForm from './AddMessageForm/AddMessageForm.js';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
  //let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
     props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
}

export default Dialogs;
