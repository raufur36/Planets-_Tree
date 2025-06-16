import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import auth from '../../Firebase/firebase_sdk';

const Header = () => {
    const { user, Logout } = use(AuthContext);

    const Links = (

        <>
            <li className='' ><NavLink>Home</NavLink></li>
            <li><NavLink>All Plants</NavLink></li>
            <li><NavLink to='/addplant' >Add Plant</NavLink></li>
            <li><NavLink>My Plants</NavLink></li>
        </>


    )
    const HandleSignOut = () => {
        Logout(auth)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {Links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl ">Seeds & Plants</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ?
                            <button onClick={HandleSignOut} className="btn">
                                Sign Out
                            </button>
                            :
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;