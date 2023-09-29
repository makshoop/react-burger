import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Profile from './Profile.jsx';
import OrderList from './OrderList.jsx';
import ConstructorBurger from './Constructor.jsx';
import styles from './index.css'

function AppHeader() {
    return (
        <header>
            <div className={`${styles.header} header`}>
                <div className={`${styles.burgerList} burger-list`}>
                    <ConstructorBurger />
                    <OrderList />
                </div>
                <div className={`${styles.logo} logo`}>
                    <Logo />
                </div>
                <div className={`${styles.profile} profile`}>
                    <Profile />
                </div>
            </div>
        </header>
    );
}

export default AppHeader;
