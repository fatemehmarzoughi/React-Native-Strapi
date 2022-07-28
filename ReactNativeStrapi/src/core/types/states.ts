/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { AuthorStates } from "src/reducers/author";
import { PostStates } from "src/reducers/posts";

/* -------------------------------------------------------------------------- */
/*                                 State Types                                */
/* -------------------------------------------------------------------------- */

export type AppStates = {
    PostsStates: PostStates,
    AuthorStates: AuthorStates,
}