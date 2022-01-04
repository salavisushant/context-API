import {AuthContext} from "../context/AuthContext"
import { useContext } from "react";
export const Status = ()=>{
    const {isAuth,token} = useContext(AuthContext);

    return <div>{isAuth ? `token is ${token}`:`User Is not logged in`}</div>
};