/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { combineReducers } from "redux";
import Posts from "./posts";
import Author from "./author";

/* -------------------------------------------------------------------------- */
/*                                Root Reducer                                */
/* -------------------------------------------------------------------------- */
export const rootReducer = combineReducers({
    PostsStates: Posts,
    AuthorStates: Author,
})