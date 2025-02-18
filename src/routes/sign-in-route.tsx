import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export default function SignIn() {
    const signIn = async () => {
        const provider = new GoogleAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch(e) {

        }
    }
    return(
        <Button onClick={signIn}>
            Sign in with Google
        </Button>
    )
}