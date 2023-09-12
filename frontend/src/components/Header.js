import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to="/">Main</Link>
            <span> | </span>
            {user ? (
                <a href="#" onClick={logoutUser}>Logout</a>
            ): (
                <Link to="/login">Login</Link>
            )}

            {user && <p>Your username: {user.username}</p>}
        </div>
    )
}

export default Header