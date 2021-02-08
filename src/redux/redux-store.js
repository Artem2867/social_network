import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import usersReducer from "./reducer/usersReducer";
import authReducer from './reducer/authReducer'
import ThunkMiddleWare from "redux-thunk";




const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authMe: authReducer
})



const store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

window.store = store;



export default store;