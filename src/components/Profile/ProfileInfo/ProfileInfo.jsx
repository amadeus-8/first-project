import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/*<div>

        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='content'/>
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
