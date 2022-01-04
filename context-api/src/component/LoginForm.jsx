import {AuthContext} from "../context/AuthContext";
import {useContext,useState} from "react";
import { Form } from "./Form";
import "./form.css";

export const LoginForm = ()=>{
    const {handleLogin} = useContext(AuthContext);

    const [username,setUsername] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(username)
    };
    return(
        <Form onSubmit={onSubmit} title="Login">
            <input
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="name"
            />
        </Form>
    )
}