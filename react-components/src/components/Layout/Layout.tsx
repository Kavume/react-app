import React from 'react';
import styles from './Layout.module.scss';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;