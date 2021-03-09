import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import usersReducer from "./reducer/usersReducer";
import authReducer from './reducer/authReducer'
import ThunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authMe: authReducer,
    form: formReducer
})

export type AppState = ReturnType<typeof reducers>;

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ThunkMiddleWare)));


export default store;