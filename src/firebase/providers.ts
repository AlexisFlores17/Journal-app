import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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