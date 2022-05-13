
let initialState = {
    friendsData: [
        { id: 1, name: 'Dima', photoUrl: null },
        { id: 2, name: 'Yana', photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png' },
        { id: 3, name: 'Oleg', photoUrl: null },
        { id: 4, name: 'Alexa', photoUrl: null },
        { id: 5, name: 'Alex', photoUrl: null }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;