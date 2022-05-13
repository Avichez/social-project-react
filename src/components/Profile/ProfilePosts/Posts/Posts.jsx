import React from "react";
import style from './Posts.module.css'
import iconLike from './../../../../assets/images/icons/like.png'

const Posts = (props) => {
    return (
        <div className={style.posts_block}>
            <div className={style.post_item}>
                <div className={style.post_item_photo}>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png' width='70' />
                    <span>Bogdan I.</span>
                </div>
                <div className={style.post_item_text}>
                    <p>{props.message}</p>
                    <div className={style.post_item_likes}>
                        <img src={iconLike} width='30'/>
                        <span>{props.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;