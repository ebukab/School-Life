import AccountActionTypes from "./account.types"

const INITIAL_STATE = {
    profileSelectedOption: "Home",
    displayChatWith: ""
}

const accountReducer = (state= INITIAL_STATE, action) => { 
    switch (action.type) { 
        case AccountActionTypes.UPDATE_PROFILE_OPTION:
            return {
                ...state,
                profileSelectedOption: action.payload
            }
        case AccountActionTypes.CHAT_TO_DISPLAY:
            return {
                ...state,
                displayChatWith: action.payload
            }
        default:
            return state;
    }
}

export default accountReducer