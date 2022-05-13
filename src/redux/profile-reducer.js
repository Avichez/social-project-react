const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, updateText: text })
export const setProfileData = (profile) => ({ type: SET_PROFILE_DATA, profile})


let initialState = {
    postsData: [
        { id: 1, message: 'Hey there is my new message', likesCount: 12 },
        { id: 2, message: 'Check this out', likesCount: 5 },
        { id: 3, message: 'This is how it works', likesCount: 10 }
    ],
    currentPostText: '',
    profileData: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 4, message: state.currentPostText, likesCount: 0 }],
                currentPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                currentPostText: action.updateText
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                profileData: action.profile
            }
        default:
            return state
    }
}

export default profileReducer;