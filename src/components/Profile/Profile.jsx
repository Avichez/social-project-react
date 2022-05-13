import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <ProfilePostsContainer />
        </div>
    )
}

export default Profile;