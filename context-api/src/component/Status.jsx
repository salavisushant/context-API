import {AuthContext} from "../context/AuthContext"
import { useContext } from "react";
export const Status = ()=>{
    const {isAuth,token} = useContext(AuthContext);

    return <div style={{fontSize:"25px",fontWeight:"700",color:"#1A237E"}}>{isAuth ? `token is ${token}`:`User Is not logged in`}</div>
};