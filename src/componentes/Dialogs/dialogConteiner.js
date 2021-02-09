import { connect } from "react-redux";
import { compose } from "redux";
import authRedirectHoc from "../../HOC/authHOC";
import { textNewMessage, sendNewMessage } from "../../redux/reducer/dialogsReducer";
import Dialogs from "./dialogs";


const mapStateToProps = (state) => {
    return {
        dialogArr: state.dialogsPage.dialogarr,
        message: state.dialogsPage.Message,
        defaultInputValue: state.dialogsPage.NewMassage
    }
}


export default compose(
    connect(mapStateToProps, {textNewMessage, sendNewMessage}),
    authRedirectHoc
) (Dialogs);