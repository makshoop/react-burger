import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorBurger() {
    return (
        <>
            <BurgerIcon type="primary" /> 
            <p className="text text_type_main-default">
                Конструктор
            </p>
        </>
    );
}

export default ConstructorBurger;