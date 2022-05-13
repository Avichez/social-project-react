const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const addNewMessageAC = () => ({ type: ADD_NEW_MESSAGE })
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, updateText: text })


let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: state.currentMessageText}],
                currentMessageText: ''
            }
            // let newMessage = {
            //     id: 5,
            //     message: state.currentMessageText
            // }
            // stateCopy.messagesData.push(newMessage);
            // stateCopy.currentMessageText = '';
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                currentMessageText: action.updateText
            }
        default:
            return state
    }
}

export default dialogsReducer;