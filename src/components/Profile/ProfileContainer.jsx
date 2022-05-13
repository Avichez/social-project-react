import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfileData } from "../../redux/profile-reducer";
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.match.params.userId
        if (!profileId) {
            profileId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(response => {
                this.props.setProfileData(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profileData: state.profilePosts.profileData
    }
}

let urlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfileData })(urlDataProfileContainer);