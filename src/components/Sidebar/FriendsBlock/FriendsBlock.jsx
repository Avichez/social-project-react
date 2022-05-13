import React from "react";
import style from './FriendsBlock.module.css'
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsBlock = (props) => {

    const friendslist = props.friendsData.map( user => <FriendsListItem key={user.id} id={user.id} name={user.name} userPhoto={user.photoUrl}/>)

    return (
        <div className={style.friends_block}>
            <h3>Best Friends:</h3>
            <div className={style.friends_list}>
                {friendslist}
            </div>
        </div>
    )
}

export default FriendsBlock;