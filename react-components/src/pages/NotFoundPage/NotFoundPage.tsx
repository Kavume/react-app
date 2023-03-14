import React from 'react';
import styles from './NotFoundPage.module.scss';
import Button from "../../components/common/Button";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textWrap}>
                <h2 className={styles.title}>Something's wrong here!</h2>
                <p className={styles.text}>This is a 404 error, which means you have clicked on a wrong link or entered
                    an invalid URL</p>
            </div>
            <Link to='/'>
                <Button text={'Go back'}/>
            </Link>
        </div>
    );
};

export default NotFoundPage;