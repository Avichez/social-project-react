import React from "react";
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profile-reducer";
import ProfilePosts from "./ProfilePosts";


const mapStateToProps = (state) => {
    return {
        profilePosts: state.profilePosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateValue: (text) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;