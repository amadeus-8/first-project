import React, {useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(true);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    //Массив первый элемент - false
    //Второй элемент это функция

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
      setEditMode(true);
    }

    const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
    }

    const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
    }

    return (
      <div>
        {!editMode &&
          <div>
              <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
          </div>
        }
        {editMode &&
          <div>
            <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode} />
          </div>
        }
      </div>
    );
}

export default ProfileStatusWithHooks;
