import React from "react";
import style from './ProfilePosts.module.css'
import iconSend from './../../../assets/images/icons/send.png'
import Posts from "./Posts/Posts";

const ProfilePosts = (props) => {

    const userPosts = props.profilePosts.postsData.map(el => <Posts key={el.id} id={el.id} message={el.message} likesCount={el.likesCount} />)


    const onAddPost = () => {
        props.addPost()
    }

    let newPostEl = React.createRef();
    let onUpdateValue = () => {
        let text = newPostEl.current.value
        props.updateValue(text)
    }

    return (
        <div>
            <div className={style.post_create_wrapper}>
                <h3>My Posts</h3>
                <textarea ref={newPostEl} placeholder='Type your post here' value={props.profilePosts.currentPostText} onChange={onUpdateValue}></textarea>
                <button onClick={onAddPost}>
                    <span>SEND</span>
                    <img src={iconSend} width='30' alt="Send"/>
                </button>
            </div>
            <div className={style.posts_block}>
                {userPosts}
            </div>
        </div>
    )
}

export default ProfilePosts;