import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credential);

        const { displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // const errorCode = (error as any).code;
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        
        return {
            ok: false,
            errorMessage
        }
    }
}



export const registerUserWithEmailPassword = async({email,password,displayName}: {email: string, password: string, displayName: string} ) => {

    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const {uid, photoURL} = resp.user;

        await updateProfile(FirebaseAuth.currentUser!, {displayName});

        return {
            ok: true,
            uid, photoURL, displayName, email
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage:error
        }
    }
}


export const loginWithEmailPassword = async ({email,password}: {email: string, password: string} ) => {
    try {
        
        const {user} = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const {uid, photoURL, displayName} = user;

        return {
            ok: true,
            uid, photoURL, displayName, email
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage:error
        }
    }
}
