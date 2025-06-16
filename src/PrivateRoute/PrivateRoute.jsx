import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { loading,user } = use(AuthContext);
   const location = useLocation();
    if(!loading == false){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate state={location} to='/login'></Navigate>
    }
};

export default PrivateRoute;