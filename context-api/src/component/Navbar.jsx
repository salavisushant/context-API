import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const Navbar = () => {
    const{isTog,handleToggleAuth}= useContext(AuthContext)

    return(
        <div>
            <button variant="text" onClick={handleToggleAuth}>
                {isTog ? "Sign-Out" : "Sign-In"}
            </button>
        </div>
    )
}