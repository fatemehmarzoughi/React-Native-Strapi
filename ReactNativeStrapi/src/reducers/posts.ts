/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { PostAction } from "@src/core/types/actions";
import { 
    GET_POSTS_SUCCESSFULLY,
    GET_POSTS_FAILED,
    GET_POSTS,
} from "@src/actions/posts/types";
import { Attribute } from "@src/core/types/general";

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