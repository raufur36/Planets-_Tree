import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;