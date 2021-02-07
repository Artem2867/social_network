import { connect } from "react-redux";
import { textNewMessageActionCreater, sendNewMessageActionCreater } from "../../redux/reducer/dialogsReducer";
import Dialogs from "./dialogs";




const mapStateToProps = (state) => {
    return {
        dialogArr: state.dialogsPage.dialogarr,
        message: state.dialogsPage.Message,
        defaultInputValue: state.dialogsPage.NewMassage
    }
}

const mapDispatchToProps = (dispatch) => {
    const sendNewMessage = () => {
        dispatch(sendNewMessageActionCreater())
    }
    const textNewMessage = (text) => {
        dispatch(textNewMessageActionCreater(text))
    }

    return {
        sendNewMessage: sendNewMessage,
        textNewMessage: textNewMessage
    }
}



const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsConteiner;