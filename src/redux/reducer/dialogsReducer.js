const SENDNEWMESSAGE = 'SEND-NEW-MESSAGE';
const TEXTNEWMASSEGE = 'TEXT-NEW-MESSAGE';


const dialogsPage = {
        Message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Fun'},
            {id: 5, message: 'Hi'},
            {id: 6, message: 'Hi'}
        ],
        dialogarr: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Ivan'},
            {id: 3, name: 'Victor'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Misha'},
            {id: 6, name: 'Anton'}
        ],
        NewMassage: ''      
    
}



const dialogsReducer = (state = dialogsPage, action) => {
    switch(action.type) {
        case 'SEND-NEW-MESSAGE':
            const TextNewMassage = state.NewMassage;
            return {
                ...state,
                NewMassage: '',
                Message: [...state.Message, {
                    id: 7,
                    message: TextNewMassage
                }]
            }
        case 'TEXT-NEW-MESSAGE': 
            return {
                ...state,
                NewMassage: action.message
            }
        default:
            return state
    }
}

export const sendNewMessage = () => {
    return {
        type: SENDNEWMESSAGE
    }
}
export const textNewMessage = (text) => {
    return {
        type: TEXTNEWMASSEGE,
        message:  text
    }
}

export default dialogsReducer;