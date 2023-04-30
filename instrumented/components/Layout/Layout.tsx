import React, { Component } from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

class Layout extends Component {
  render() {
    return (
      <div className={styles.layout} data-testid={'layout'}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default Layout;
