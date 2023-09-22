import React from 'react';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderList() {
    return (
        <>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive" >
                Лента заказов
            </p>
        </>
    );
}

export default OrderList;
