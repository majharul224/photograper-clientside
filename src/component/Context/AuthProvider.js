import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, updateProfile, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";




const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

       // signup authprovider

       const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin authprovider
    const signin = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    
// profile auth

const profileUpdate=(name)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
      
      });
}


    // sign auth

    const signout = () => {
     
        return signOut(auth)
    }

 // google authprovider

 const signinGoogle = () => {
setLoading(true)
    return signInWithPopup(auth, provider)
}
  // github authprovider
    
  const signinGithub = () => {

    return signInWithPopup(auth, gitProvider)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
        // console.log('auth state changed', currentUser);
    })

    return () => {
        unsubscribe();
    }

}, [])

    const data = {  user, signup, signin, loading, signout, signinGoogle,signinGithub,profileUpdate }
    return (
        <div>
           <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;