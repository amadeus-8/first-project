import React from 'react';
import {addPostActionCreator, updateNewsPostTextActionCreator}  from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onChangePost = (text) => {
    let action = updateNewsPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={onChangePost} addPost={addPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}/>
  );
}

export default MyPostsContainer;
