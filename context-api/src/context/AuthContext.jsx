import {useState} from 'react';
import {createContext} from 'react'
import {nanoid} from 'nanoid'

export const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthContextProvider = ({children}) =>{
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState(null);
    const [isTog,setIsTog]= useState(false);

    const handleToggleAuth = () =>{
        setIsTog((prev)=>!prev)
    };

    const handleLogin = (username) => {
        setIsAuth (true);
        setToken(nanoid(10)+" and user is "+username)
    }
    const value ={isAuth,isTog,token,handleLogin,handleToggleAuth};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}