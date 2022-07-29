/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { combineReducers } from "redux";
import Posts from "./posts";
import Author from "./author";
import Global from "./global";

/* -------------------------------------------------------------------------- */
/*                                Root Reducer                                */
/* -------------------------------------------------------------------------- */
export const rootReducer = combineReducers({
    GlobalStates: Global,
    PostsStates: Posts,
    AuthorStates: Author,
})