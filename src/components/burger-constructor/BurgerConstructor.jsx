import React, { useState, useEffect } from 'react';
import { DragIcon, ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerData from '../../utils/data';
import styles from './BurgerConstructor.css';

const BurgerConstructorList = ({ onTotalSumChange }) => {
const [displayedElements, setDisplayedElements] = useState([]);

useEffect(() => {
    const displayedElements = burgerData.filter((item, index) => {
        return index !== 0 && index !== burgerData.length - 1; 
    });

    setDisplayedElements(displayedElements);


    const totalSum = [displayedElements.reduce((sum, item) => sum + item.price, 0), <CurrencyIcon type="primary"/>]

    onTotalSumChange(totalSum);
}, [onTotalSumChange]);

    return (
        <div className={`${styles.scrollcontainer} scroll-container`} style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto'}}>
            {displayedElements.map((item, index) => (
                <div key={item._id} className="constructor-item">
                    {index !== 0 && index !== displayedElements.length - 1 && (
                        <DragIcon />
                    )}
                    <ConstructorElement
                        type={index === 0 ? "top" : index === displayedElements.length - 1 ? "bottom" : "" }
                        isLocked={index === 0 || index === displayedElements.length - 1}
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

const BurgerConstructor = () => {
    const [totalSum, setTotalSum] = useState(0);

    const handleTotalSumChange = (sum) => {
        setTotalSum(sum);
    };

    return (
        <div>
            <BurgerConstructorList onTotalSumChange={handleTotalSumChange} />
            <div className="total-sum-order">
                <p className="text text_type_digits-medium">
                    {totalSum}
                </p>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
};

export default BurgerConstructor;
