import { CHANGE_SEARCH_FILED } from "./constants"

const initialState = {
    searchFiled: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FILED:
            // return Object.assign({}, state, searchFiled: action.payload);
            return {... state, searchFiled: action.payload};
        default: return state;
    }
}