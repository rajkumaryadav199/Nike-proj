
import { legacy_createStore,applyMiddleware,compose,combineReducers } from "redux";
import {reducer as AppReducer} from "./App/reducer";
import {reducer as AuthReducer} from "./Auth/reducer";


const rootReducer = combineReducers({
     App: AppReducer,
    Auth : AuthReducer
})


export const store = legacy_createStore(rootReducer)