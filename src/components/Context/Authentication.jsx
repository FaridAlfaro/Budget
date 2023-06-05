import { createContext, useEffect, useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase/config";


export const Authentication = createContext()


export const AuthProvider  = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))

    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch((e) =>{
                console.log(error)
            })
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))
    }  

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser({
                    email: user.email,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    logged: false
                })
            }
        })
    }, [])

    return (
        <Authentication.Provider value={{
            user,
            login,
            register,
            logout,
            loginWithGoogle
        }}>
            {children}
        </Authentication.Provider>
    )
}