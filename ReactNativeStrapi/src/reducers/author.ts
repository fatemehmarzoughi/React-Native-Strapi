/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import {
    GET_POST_AUTHOR,
    GET_POST_AUTHOR_FAILED,
    GET_POST_AUTHOR_SUCCESSFULLY,
} from '../actions/posts/types';

/* -------------------------------------------------------------------------- */
/*                               Author Reducer                               */
/* -------------------------------------------------------------------------- */

const initialState = {
    loading: false,
    authorInfo: {},
    error: null,
    imageURL: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST_AUTHOR:
            return {
                ...state,
                loading: true,
                authorInfo: {},
                imageURL: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
            }
            break;
        case GET_POST_AUTHOR_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                authorInfo: action.payload,
                imageURL: action.imageURL,
            }
            break;
        case GET_POST_AUTHOR_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
            break;
        default:
            return state;
            break;
    }
}