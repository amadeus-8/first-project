import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
