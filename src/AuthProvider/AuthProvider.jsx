import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import auth from "../Firebase/firebase_sdk";
import AuthContext from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const Register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const GoogleProvider = new GoogleAuthProvider();

    const GitProvider = new GithubAuthProvider();


    const LoginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }
    const LoginWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, GitProvider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            serUser(currenUser);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }

    }, [])
    const userInfo = {
        Register,
        signIn,
        Logout,
        user,
        serUser,
        loading,
        setLoading,
        LoginWithGoogle,
        LoginWithGitHub
    }
    return (
        <div>
            <AuthContext value={userInfo} >
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
