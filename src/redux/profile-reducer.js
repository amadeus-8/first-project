import {usersAPI} from '../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFLE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11}
  ],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
        };
        {/*
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
      */}
    case UPDATE_NEW_POST_TEXT: {
        return {
          ...state,
          newPostText: action.newText
        };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
        return state;
  }
}

export let addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
}

export let updateNewsPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
}

export let setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export let getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
}


export default profileReducer;
