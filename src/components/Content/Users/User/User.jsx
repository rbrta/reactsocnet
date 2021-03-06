import React from 'react';
import s from './User.module.css';
import userSmallPhoto from '../../../../commonImages/userSmallPhoto.png'
import { NavLink } from 'react-router-dom';

let User = props => {

    return (
        <div className={s.user}>
            <div className={s.photoWrapper}>
                <NavLink to={`/profile/${props.data.id}`}>
                    <img src={`${props.data.photos.small ? props.data.photos.small : userSmallPhoto}`} alt='user' />
                </NavLink>
            </div>
            <div>
                <div>
                    {props.data.name}
                </div>
                <div>
                    {
                        props.data.followed ?
                            <button disabled={props.followingProcess.some(id => id === props.data.id)} onClick={() => {
                                props.unfollowThunkCreator(props.data.id);
                            }}>unfollow</button>
                            : <button disabled={props.followingProcess.some(id => id === props.data.id)} onClick={() => {
                                props.followThunkCreator(props.data.id);
                            }}>follow</button>
                    }
                </div>
            </div>
        </div>

    )

}

export default User;

