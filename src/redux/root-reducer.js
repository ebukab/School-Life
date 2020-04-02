import { combineReducers } from "redux"; 

import accountReducer from "./account/account.reducer";
import { authReducer } from "./auth/auth.reducer";

export default combineReducers({
    account: accountReducer,
    auth: authReducer
})