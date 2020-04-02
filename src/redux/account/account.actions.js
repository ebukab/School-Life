import AccountActionTypes from "./account.types"

// export const updateProfileOption = (option) => (dispatch) => {
//     dispatch({
//         type: AccountActionTypes.UPDATE_PROFILE_OPTION,
//         payload: option
//     })
// }

// export const chatToDisplay = (id) => return{
//     type: AccountActionTypes.CHAT_TO_DISPLAY,
//     payload: id
// }
    
export const updateProfileOption = (option) => {
    return({
        type: AccountActionTypes.UPDATE_PROFILE_OPTION,
        payload: option
    })
}

export const chatToDisplay = (id) => {
    return({
        type: AccountActionTypes.CHAT_TO_DISPLAY,
        payload: id
    })
}
