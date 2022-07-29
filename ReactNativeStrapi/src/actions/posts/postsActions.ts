/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import axios from "@src/core/_axios";
import { 
    GET_POSTS, 
    GET_POSTS_SUCCESSFULLY, 
    GET_POSTS_FAILED, 
    GET_POST_AUTHOR,
    GET_POST_AUTHOR_FAILED,
    GET_POST_AUTHOR_SUCCESSFULLY,
} from './types';
import { BASE_URL } from 'react-native-dotenv';
import { Post } from "@src/core/types/entities";
import { PostAction } from "@src/core/types/actions";
import { Attribute } from "@src/core/types/general";

/* --------------------------- Dispatch Type --------------------------- */
type AllDispatch = (arg: PostAction) => (PostAction);

/* -------------------------------------------------------------------------- */
/*                                Posts Actions                               */
/* -------------------------------------------------------------------------- */
export function getAllPosts(locale: string) {
    return async (dispatch: AllDispatch) => {
        dispatch({
            type: GET_POSTS,
        })
        try {
            const articles = await axios.get(`/api/articles?populate=*&locale=${locale}`);
            dispatch({
                type: GET_POSTS_SUCCESSFULLY,
                payload: articles.data.data,
            })
        } catch (error) {
            dispatch({
                type: GET_POSTS_FAILED,
                error: error as Error,
            })
        }
    }
}

export function getPostAuthor(item: Attribute) {
    const post = item.attributes as Post;
    return async (dispatch: AllDispatch) => {
        dispatch({
            type: GET_POST_AUTHOR,
        })

        if (post.author.data != null) {
            try {                
                const author = await axios.get(
                  `/api/writers/${post.author.data.id}?populate=*`,
                );
                dispatch({
                    type: GET_POST_AUTHOR_SUCCESSFULLY,
                    payload: author.data.data.attributes,
                    imageURL: BASE_URL + author.data.data.attributes.picture.data.attributes.url,
                })
            } catch (error) {
                dispatch({
                    type: GET_POST_AUTHOR_FAILED,
                    error: error as Error,
                })
            }
        } else {
            dispatch({
                type: GET_POST_AUTHOR_FAILED,
            })
        }
    }
}