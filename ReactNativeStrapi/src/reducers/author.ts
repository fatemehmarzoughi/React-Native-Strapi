/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import {
    GET_POST_AUTHOR,
    GET_POST_AUTHOR_FAILED,
    GET_POST_AUTHOR_SUCCESSFULLY,
} from '../actions/posts/types';
import { AuthorAction } from '../core/types/actions';
import { Author } from '../core/types/entities';

/* -------------------------------------------------------------------------- */
/*                               Author Reducer                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Interface ------------------------------- */
export interface AuthorStates {
    loading: boolean,
    authorInfo: Author,
    error?: Error,
    imageURL: string,
}

const initialState: AuthorStates = {
    loading: false,
    authorInfo: {},
    error: undefined,
    imageURL: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
}

export default function (state = initialState, action: AuthorAction) {
    switch (action.type) {
        case GET_POST_AUTHOR:
            return {
                ...state,
                loading: true,
                authorInfo: {},
                imageURL: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            }
        case GET_POST_AUTHOR_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                authorInfo: action.payload,
                imageURL: action.imageURL,
            }
        case GET_POST_AUTHOR_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}