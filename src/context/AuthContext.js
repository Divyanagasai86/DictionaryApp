import { createContext, useContext, useState,useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user,setUser] = useState({});
    const [googleUser,setGoogleUser] = useState();
  

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return logout(auth);
    };

    useEffect(() => {
        const user_data = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            user_data();
        }
    }, []);

    return (
        <UserContext.Provider value={{ createUser, login, logout,googleUser,setGoogleUser }}>
            {children}
        </UserContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(UserContext);
};