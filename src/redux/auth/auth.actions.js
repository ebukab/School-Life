import AuthActionTypes from "./auth.types"

export const signUp = (userInfo) => (dispatch) => {
    dispatch({
        type: AuthActionTypes.SIGN_UP,
        payload: userInfo
    })
}

export const signIn = (userInfo) => (dispatch) => {
    dispatch({
        type: AuthActionTypes.SIGN_IN,
        payload: userInfo
    })
}

export const signOut = () => (dispatch) => {
    dispatch({
        type: AuthActionTypes.SIGN_OUT,
    })
}

export const resetPassword = (userInfo) => (dispatch) => {
    dispatch({
        type: AuthActionTypes.RESET_PASSWORD,
        payload: userInfo
    })
}

export const getUser = () => (dispatch) => {
    dispatch({
        type: AuthActionTypes.GET_USER,
    })
}

export const updateUser = (user) => {
    return({
        type: AuthActionTypes.UPDATE_USER ,
        payload: user
    })
}