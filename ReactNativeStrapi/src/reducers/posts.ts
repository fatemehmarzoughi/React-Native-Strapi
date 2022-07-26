/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { 
    GET_POSTS_SUCCESSFULLY,
    GET_POSTS_FAILED,
    GET_POSTS,
} from "../actions/posts/types";
import { PostAction } from "../core/types/actions";
import { Attribute } from "../core/types/general";

/* -------------------------------- Interface ------------------------------- */
export interface PostStates {
    loading: boolean,
    posts: Array<Attribute>,
}

const initialState: PostStates = {
    loading: false,
    posts: [],
}

/* -------------------------------------------------------------------------- */
/*                                Posts Reducer                               */
/* -------------------------------------------------------------------------- */
export default function (state=initialState, action: PostAction) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
            }
        case GET_POSTS_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case GET_POSTS_FAILED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}