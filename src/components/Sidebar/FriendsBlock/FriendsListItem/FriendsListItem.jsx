import React from "react";
import style from './FriendsListItem.module.css'

const FriendsListItem = (props) => {
    return (
        <div className={style.friends_list_item}>
            <img src= { !props.userPhoto ? 'https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png' : props.userPhoto} width='60' />
            <span>{props.name}</span>
        </div>
    )
}

export default FriendsListItem;