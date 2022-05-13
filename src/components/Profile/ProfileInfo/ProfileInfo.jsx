import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.profile_header}>
                <img src='' />
            </div>
            <div className={style.profile_infoblock}>
                <div className={style.profile_photo}>
                    <img src={props.profileData != null ? props.profileData.photos.small : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png'} alt='I am Batman'></img>
                </div>
                <div className='profile_description'>
                    <h3>{props.profileData != null ? props.profileData.fullName : 'No Name'}</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum odit dicta ducimus
                        perspiciatis eligendi eveniet possimus fugiat distinctio mollitia nulla omnis, animi commodi harum facilis!</p>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;