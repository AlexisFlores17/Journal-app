import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";



export const checkingAuthentication = (email:string,password:string) => {
    console.log(email,password)
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () => {

    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());
        
        const result = await singInWithGoogle()
        

        if(!result.ok ) return dispatch(logout(result.errorMessage))


        dispatch(login(result))
    }
}


export const startCreatingUserWithEmailPAssword = ({email, password, displayName}: {email: string, password: string, displayName: string}) => {

    return async ( dispatch:AppDispatch) => {
        
        dispatch(checkingCredentials());

        const {ok , uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email,password,displayName});

        if(!ok) return dispatch(logout(String(errorMessage)))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}


export const startLoginWithEmailPassword = ({email,password}:{email:string, password:string}) => {
    
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials());

        const {ok, errorMessage, uid, displayName,photoURL} = await loginWithEmailPassword({email,password});

        if(!ok) return dispatch(logout(String(errorMessage)))


        dispatch(login({uid, displayName, email, photoURL}))
    }
}