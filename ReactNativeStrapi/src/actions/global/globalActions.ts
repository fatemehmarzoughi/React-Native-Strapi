/* -------------------------------------------------------------------------- */
/*                               Global Actions                               */
/* -------------------------------------------------------------------------- */

import { SET_LANGUAGE_TO_EN, SET_LANGUAGE_TO_FA } from "./types";

/* --------------------------- Dispatch Type --------------------------- */
type AllDispatch = (arg: { payload: string; type: string }) => (string);

export const setLanguageToFa = () => {
    return (dispatch: AllDispatch) => {
        dispatch({
            type: SET_LANGUAGE_TO_FA,
            payload: 'fa',
        })
    }
}

export const setLanguageToEn = () => {
    return (dispatch: AllDispatch) => {
        dispatch({
            type: SET_LANGUAGE_TO_EN,
            payload: 'en',
        })
    }
}