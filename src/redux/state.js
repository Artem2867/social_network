import dialogsReducer from './reducer/dialogsReducer';
import profileReducer from './reducer/profileReducer';


const Store = {
    _State: {
        profilePage: {
            Myposts: [
                {id: 1, post: 'My first post',likeCount: 0},
                {id: 2, post: 'My second post',likeCount: 0},
                {id: 3, post: 'My third post',likeCount: 0},
                {id: 4, post: 'My fourth post',likeCount: 0},
              ],
            TextNewPost: '',
        },
    
        dialogsPage: {
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
    
            
        },
    },
    getState ()  {
        return this._State
    },
    _rerenderElemTree: () => {
        console.log('I have not some element to render on page!');
    },
    dispatch(action) {
        this._State.profilePage = profileReducer(this._State.profilePage, action)
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action)
        this._rerenderElemTree(this._State)
    },
    getRenderState (observer) {
        this._rerenderElemTree = observer;
    },
    
}


export default Store;