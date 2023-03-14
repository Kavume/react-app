import React from 'react';
import styles from './Layout.module.scss';
import {Outlet} from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;