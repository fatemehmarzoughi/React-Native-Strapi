/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { ImageStrapi } from "./general"

/* -------------------------------------------------------------------------- */
/*                               Entities Types                               */
/* -------------------------------------------------------------------------- */

export type Post = {
    title: String,
    description: String,
    image: ImageStrapi,
    publishedAt: Date,
    author: any,
}

export type Author = {
    fullname?: String,
    email?: String,
    imageURL?: string,
}

