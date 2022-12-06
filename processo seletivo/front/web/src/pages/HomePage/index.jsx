import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";


const HomePage = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return(
        <>
            <button className="btn third" onClick={handleLogout}>Logout</button>
        </>
    )
}

export default HomePage;