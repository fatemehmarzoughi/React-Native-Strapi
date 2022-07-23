import axios from "../../core/_axios";
import { 
    GET_POSTS, 
    GET_POSTS_SUCCESSFULLY, 
    GET_POSTS_FAILED, 
} from './types';

export function getAllPosts(){
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