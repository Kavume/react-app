import React, { Component } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
          Home page
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? styles.link && styles.active : styles.link)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact-form"
          className={({ isActive }) => (isActive ? styles.link && styles.active : styles.link)}
        >
          Contact Form
        </NavLink>
      </div>
    );
  }
}

export default Header;
