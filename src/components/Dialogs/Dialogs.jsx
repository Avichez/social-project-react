import React from "react";
import style from './Dialogs.module.css'
import iconSend from './../../assets/images/icons/send.png'
import DialogsItem from './DialogsItem/DialogsItem'
import MessagesBody from './MessagesBody/MessagesBody'


const Dialogs = (props) => {

    const dialogsItem = props.dialogsPage.dialogsData.map(el => <DialogsItem key={el.id} id={el.id} name={el.name} />)

    const messagesItem = props.dialogsPage.messagesData.map(el => <MessagesBody key={el.id} id={el.id} message={el.message} />)


    const onAddMessage = () => {
        props.addMessage()
    }

    // let messageText = React.createRef()
    let onUpdateInputValue = (event) => {
        let currentText = event.target.value
        props.updateInputValue(currentText)
    }


    return (
        <section className={style.dialogs_wrapper}>
            <div className={style.dialogs_list}>
                <ul>
                    {dialogsItem}
                </ul>
            </div>
            <div className={style.messages_block}>
                <div className={style.messages_items}>
                    <span>{messagesItem}</span>
                </div>
                <div className={style.create_message}>
                    <input type="text" placeholder="Type your Message" value={props.dialogsPage.currentMessageText}
                        onChange={onUpdateInputValue} />
                    <button onClick={onAddMessage}>
                        <img src={iconSend} width='40' alt="Send"/>
                    </button>
                </div>
            </div>
        </section >
    )
}

export default Dialogs;