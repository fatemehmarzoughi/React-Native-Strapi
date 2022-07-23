/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from "react";
import { 
    GET_POSTS_SUCCESSFULLY,
    GET_POSTS_FAILED,
    GET_POSTS,
} from "../actions/posts/types"

const initialState = {
    loading: false,
    posts: [],
}

/* -------------------------------------------------------------------------- */
/*                                Posts Reducer                               */
/* -------------------------------------------------------------------------- */
export default function (state=initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
            }
            break;
        case GET_POSTS_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
            break;
        case GET_POSTS_FAILED:
            return {
                ...state,
                loading: false,
            }
            break;
    
        default:
            return state;
            break;
    }
}