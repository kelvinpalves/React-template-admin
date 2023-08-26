import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import firebase from "../../firebase/config";
import User from "../../model/User";
import  route  from "next/router";

interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalized(userFirebase:firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()

    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imageUrl: userFirebase.photoURL
    }
}

function manageCookies(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-rodrigo.auth', 'logged', {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-rodrigo.auth')
    }
}

export function AuthProvider(props) {
    const [load, setLoad] = useState(true)
    const [user, setUser] = useState<User>()

    async function configureSession(userFirebase: firebase.User) {
        const user = await userNormalized(userFirebase)
        if(userFirebase?.email) {
            setUser(user)
            manageCookies(true)
            setLoad(false)
            return user.email
        } else {
            setUser(null)
            manageCookies(false)
            setLoad(false)
            return false
        }
    }
    // Login Google
    async function loginGoogle() {
        try {
            setLoad(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            configureSession(resp.user)
            route.push('/')  
        } finally {
            setLoad(false)
        }
    }

    async function logout() {
        try {
            setLoad(true)
            await firebase.auth().signOut()
            await configureSession(null)
        } finally {
            setLoad(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-rodrigo.auth')) { 
            const cancel = firebase.auth().onIdTokenChanged(configureSession)
            return () => cancel()
        } else {
            setLoad(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext