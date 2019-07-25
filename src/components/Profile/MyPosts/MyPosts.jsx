import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  //let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

AddNewPostForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;
