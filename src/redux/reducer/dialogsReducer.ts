import { DialogsPageType } from "../../utilits/MyType";
const SENDNEWMESSAGE: string = 'SEND-NEW-MESSAGE';
const TEXTNEWMASSEGE: string = 'TEXT-NEW-MESSAGE';



const dialogsPage: DialogsPageType = {
        Message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Fun'},
            {id: 5, message: 'Hi'},
            {id: 6, message: 'Hi'}
        ],
        dialogArr: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Victor'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Misha'},
            {id: 6, name: 'Anton'}
        ],
        NewMassage: ''      
    
}


const dialogsReducer = (state:DialogsPageType = dialogsPage, action: any ):DialogsPageType => {
    switch(action.type) {
        case SENDNEWMESSAGE:
            const TextNewMassage = state.NewMassage;
            return {
                ...state,
                NewMassage: '',
                Message: [...state.Message, {
                    id: 7,
                    message: TextNewMassage
                }]
            }
        case TEXTNEWMASSEGE: 
            return {
                ...state,
                NewMassage: action.message
            }
        default:
            return state
    }
}

type SendNewMessageActionType = {
    type: string | null
}

type TextNewMessageActionType = {
    type: string | null,
    message:  string | null
}

export const sendNewMessage = (): SendNewMessageActionType => ({type: SENDNEWMESSAGE})
export const textNewMessage = (text: string): TextNewMessageActionType => ({
        type: TEXTNEWMASSEGE,
        message:  text
    })

export default dialogsReducer;