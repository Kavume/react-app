import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to='/'
                     className={({isActive}) => isActive ? styles.active : styles.link}
            >
                Home page
            </NavLink>
            <NavLink to='/about-us'
                     className={({isActive}) => isActive ? styles.link && styles.active : styles.link}
            >
                About Us
            </NavLink>
        </div>
    );
};

export default Header;