import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePosts: {
            postsData: [
                { id: 1, message: 'Hey there is my new message', likesCount: 12 },
                { id: 2, message: 'Check this out', likesCount: 5 },
                { id: 3, message: 'This is how it works', likesCount: 10 }
            ],
            currentPostText: ''
        },
        dilogsPage: {
            dialogsData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Yana' },
                { id: 3, name: 'Alex' },
                { id: 4, name: 'Oleg' },
                { id: 5, name: 'Michael' },
                { id: 6, name: 'Alexa' }
            ],
            messagesData: [
                { id: 1, message: 'Hello, how are you?' },
                { id: 2, message: 'Hello, how are you?' },
                { id: 3, message: 'Hello, how are you?' },
                { id: 4, message: 'Hello, how are you?' }
            ],
            currentMessageText: ''
        },
        sidebar: {
            friendsData: [
                { id: 1, name: 'Dima', photoUrl: null },
                { id: 2, name: 'Yana', photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png' },
                { id: 3, name: 'Oleg', photoUrl: null },
                { id: 4, name: 'Alexa', photoUrl: null },
                { id: 5, name: 'Alex', photoUrl: null }
            ]
        }
    },
    _callSubscriber() { },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePosts = profileReducer(this._state.profilePosts, action) 
        this._state.dilogsPage = dialogsReducer(this._state.dilogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)

        // switch (action.type) {
        //     case ADD_POST:
        //         let newPost = {
        //             id: 4,
        //             message: this._state.profilePosts.currentPostText,
        //             likesCount: 0
        //         }
        //         this._state.profilePosts.postsData.push(newPost)
        //         this._state.profilePosts.currentPostText = '';
        //         this._callSubscriber(this._state)
        //         break
        //     case UPDATE_NEW_POST_TEXT:
        //         this._state.profilePosts.currentPostText = action.updateText;
        //         this._callSubscriber(this._state)
        //         break
        //     case ADD_NEW_MESSAGE:
        //         let newMessage = {
        //             id: 1,
        //             message: this._state.dilogsPage.currentMessageText
        //         }
        //         this._state.dilogsPage.messagesData.push(newMessage)
        //         this._state.dilogsPage.currentMessageText = '';
        //         this._callSubscriber(this._state)
        //         break
        //     case UPDATE_NEW_MESSAGE_TEXT:
        //         this._state.dilogsPage.currentMessageText = action.updateText;
        //         this._callSubscriber(this._state)
        //         break
        //     default:
        //         this._callSubscriber(this._state)
        // }
    }
}

export default store;

