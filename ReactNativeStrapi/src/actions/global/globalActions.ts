/* -------------------------------------------------------------------------- */
/*                               Global Actions                               */
/* -------------------------------------------------------------------------- */

import { SET_LANGUAGE } from "./types";

/* --------------------------- Dispatch Type --------------------------- */
type AllDispatch = (arg: { payload: string; type: string }) => (string);

export const setLanguage = (locale: string) => {
    return (dispatch: AllDispatch) => {
        dispatch({
            type: SET_LANGUAGE,
            payload: locale,
        })
    }
}

// export const setLanguageToEn = () => {
//     return (dispatch: AllDispatch) => {
//         dispatch({
//             type: SET_LANGUAGE_TO_EN,
//             payload: 'en',
//         })
//     }
// }