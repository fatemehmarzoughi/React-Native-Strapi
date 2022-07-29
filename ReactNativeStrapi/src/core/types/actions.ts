/* -------------------------------------------------------------------------- */
/*                                   Import                                   */
/* -------------------------------------------------------------------------- */
import { Author, Post } from "./entities"

/* -------------------------------------------------------------------------- */
/*                                Actions Types                               */
/* -------------------------------------------------------------------------- */

export type AuthorAction = {
    type: String,
    payload?: Author,
    imageURL?: String,
    error?: Error,
}

export type PostAction = {
    type: String,
    payload?: Post,
    error?: Error, 
    imageURL?: String,
}

export type GlobalActions = {
    type: any,
    payload: any
}