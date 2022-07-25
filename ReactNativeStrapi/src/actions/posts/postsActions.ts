/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import axios from "../../core/_axios";
import { 
    GET_POSTS, 
    GET_POSTS_SUCCESSFULLY, 
    GET_POSTS_FAILED, 
    GET_POST_AUTHOR,
    GET_POST_AUTHOR_FAILED,
    GET_POST_AUTHOR_SUCCESSFULLY,
} from './types';
import {BASE_URL} from 'react-native-dotenv';

/* -------------------------------------------------------------------------- */
/*                                Posts Actions                               */
/* -------------------------------------------------------------------------- */
export function getAllPosts() {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTS,
        })
        try {
            const articles = await axios.get('/api/articles?populate=*');
            dispatch({
                type: GET_POSTS_SUCCESSFULLY,
                payload: articles.data.data,
            })
        } catch (error) {
            dispatch({
                type: GET_POSTS_FAILED,
                payload: error,
            })
        }
    }
}

export function getPostAuthor(item) {
    return async (dispatch) => {
        dispatch({
            type: GET_POST_AUTHOR,
        })

        if (item.attributes.author.data != null) {
            try {                
                const author = await axios.get(
                  `/api/writers/${item.attributes.author.data.id}?populate=*`,
                );
                dispatch({
                    type: GET_POST_AUTHOR_SUCCESSFULLY,
                    payload: author.data.data.attributes,
                    imageURL: BASE_URL + author.data.data.attributes.picture.data.attributes.url,
                })
            } catch (error) {
                dispatch({
                    type: GET_POST_AUTHOR_FAILED,
                    error: error,
                })
            }
        } else {
            dispatch({
                type: GET_POST_AUTHOR_FAILED,
            })
        }
    }
}