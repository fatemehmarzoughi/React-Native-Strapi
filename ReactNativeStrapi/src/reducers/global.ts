/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { SET_LANGUAGE } from "@src/actions/global/types";
import { GlobalActions } from "@src/core/types/actions";

/* -------------------------------- Interface ------------------------------- */
export interface GlobalStates {
    locale: string,
}

const inisialStates: GlobalStates = {
    locale: 'en'
}

export default function(states = inisialStates, action: GlobalActions) {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...states,
                locale: action.payload,
            }
        default:
            return states;
    }
}