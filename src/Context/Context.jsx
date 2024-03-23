/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";

import app from "../Firebase/Firebase";

export const Contexts = createContext();
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const Context = ({children}) => {
    const [user, setUser] = useState(null)

    const CreateUser = (email, password, FullName, number) =>{
        return createUserWithEmailAndPassword(auth, email, password, FullName, number)
    }

    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword (auth , email, password)
    }

    const GoogleLogin = () =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const Update = ( FullName) =>{
        console.log(FullName, 'hell');
        return updateProfile(auth.currentUser , {displayName : FullName })
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
            setUser(user);
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const info = {
        user,
        CreateUser,
        LoginUser,
        GoogleLogin,
        logOut,
        Update
    }
    return (
        <Contexts.Provider value={info}>
            {children}
        </Contexts.Provider>
    );
};

export default Context;