import React from 'react';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerData from '../../utils/data';
import styles from '../burger-constructor/index.css';


const BurgerConstructor = () => {
    return (

        <div className={`${styles.scrollcontainer} scroll-container`} style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100vh', overflowY: 'auto'}}>
        {burgerData.map((item, index) => (
            <div key={item._id} className="constructor-item">
            {index !== 0 && index !== burgerData.length - 1 && (
                <DragIcon />
            )}
            <ConstructorElement
            type={index === 0 ? "top" : index === burgerData.length - 1 ? "bottom" : "" }
            isLocked={index === 0 || index === burgerData.length - 1}
            key={item.id}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            />
            </div>
        ))}
        </div>
    );
};

export default BurgerConstructor;
