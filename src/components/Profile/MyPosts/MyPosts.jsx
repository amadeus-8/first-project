import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewsPostTextActionCreator}  from '../../../redux/state.js';

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onChangePost = () => {
    let text = newPostElement.current.value;
    //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    let action = updateNewsPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      post
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText}       onChange={onChangePost} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
