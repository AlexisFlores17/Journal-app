import { AppDispatch } from "../store";
import { checkingCredentials } from "./authSlice";



export const checkingAuthentication = (email,password) => {

    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () => {

    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
    }
}