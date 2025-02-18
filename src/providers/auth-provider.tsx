import Loading from "@/components/custom/loading";
import { auth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext<User | null>(null);


function AuthProvider({
    children
 }: {
    children: React.ReactNode
 }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (state) => {
            setLoading(true);
            if(state) {
                setUser(state);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);
  return (
    <AuthContext.Provider value={user}>
        { loading ? <Loading/> : children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export default AuthProvider