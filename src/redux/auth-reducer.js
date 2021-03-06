import {authAPI} from '../api/api.js';
import {stopSubmit} from 'redux-form';
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
        return {
          ...state,
          ...action.payload,
        }

    default:
        return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth
    }
  };
}

export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me()
    .then(response => {
        if(response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));
        }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
      else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        let action = stopSubmit("login", {_error: message});
        dispatch(action);
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  }
}

export default authReducer;
