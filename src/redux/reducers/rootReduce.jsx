import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { loggin } from "./loggin";
import { todosReducer } from "./todosReducer";
import { changeStyle } from "./styleReducer";

export const rootReducer = combineReducers(
    {
        //state name : recuder that will control it
        todosState: todosReducer,
        filterState: filterReducer,
        loginState: loggin,
        styleState: changeStyle

        // ... add more states and reducers to include them in the store
    }
)