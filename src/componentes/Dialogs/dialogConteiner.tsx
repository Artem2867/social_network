import { connect } from "react-redux";
import { compose } from "redux";
import authRedirectHoc from "../../HOC/authHOC";
import { textNewMessage, sendNewMessage } from "../../redux/reducer/dialogsReducer";
import { AppState } from "../../redux/redux-store";
import Dialogs from "./dialogs";


const mapStateToProps = (state: AppState) => {
    return {
        dialogArr: state.dialogsPage.dialogArr,
        Message: state.dialogsPage.Message,
        defaultInputValue: state.dialogsPage.NewMassage
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {textNewMessage, sendNewMessage}),
    authRedirectHoc
) (Dialogs);