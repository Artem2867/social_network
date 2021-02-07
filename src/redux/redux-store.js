import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import usersReducer from "./reducer/usersReducer";
import authReducer from './reducer/authReducer'




const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authMe: authReducer
})



const store = createStore(reducers);

window.store = store;



export default store;