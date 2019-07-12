const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
  ],

  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
  ],

  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
        let stateCopy = {
          ...state,
          newMessageBody: action.body
        };
        return stateCopy;
    }
    case SEND_MESSAGE: {
        let body = state.newMessageBody;
        let stateCopy = {
          ...state,
          newMessageBody: '',
          messages: [...state.messages, {id: 6, message: body}],

        }
        return stateCopy;
    }
    default:
        return state;
  }
}

export let sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
}
export let updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
}

export default dialogsReducer;
