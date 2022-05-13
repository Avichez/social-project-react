import React from "react";
import { connect } from "react-redux";
import { addNewMessageAC, updateNewMessageTextAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//     let state = props.store.getState();

//     const addMessage = () => {
//         props.store.dispatch(addNewMessageAC())
//     }

//     const updateInputValue = (currentText) => {
//         props.store.dispatch(updateNewMessageTextAC(currentText))
//     }

//     return (
//         <Dialogs addMessage={addMessage} updateInputValue={updateInputValue} state={state} />
//     )
// }

let mapStateToProps = (state) => { // mapStateToProps Creating a new state and then react-redux compairing two states, looking for any difference.
    return {
        dialogsPage: state.dialogsPage
    }
}

let masDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAC())
        },
        updateInputValue: (currentText) => {
            dispatch(updateNewMessageTextAC(currentText))
        }
    }

}

const DialogsContainer = connect(mapStateToProps, masDispatchToProps)(Dialogs);

export default DialogsContainer;