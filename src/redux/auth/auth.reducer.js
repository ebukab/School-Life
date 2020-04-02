import AuthActionTypes from "./auth.types"
import firebase from "firebase";
import { app } from "../../firebase/firebase.utils"


const INITIAL_STATE = {
    user: "cat"
}

app.auth().onAuthStateChanged((user)=>{
    if (user) {
        firebase.database().ref(`users/${user.uid}`).on('value', (data) => {
            if (data.toJSON()) {
                return INITIAL_STATE.user = data.toJSON()
            }
        })
    }else{
        return INITIAL_STATE.user = null
    }
})

export const authReducer = (state= INITIAL_STATE, {type, payload}) => { 
    switch (type) { 
        case AuthActionTypes.GET_USER:
            return state
        case AuthActionTypes.UPDATE_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
}