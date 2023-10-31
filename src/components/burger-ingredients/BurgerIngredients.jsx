import React from 'react';
import burgerData from '../../utils/data';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css'

export const IngredientTab = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div style={{ display: 'flex', margin: '5px' }}>
                <p className="text text_type_digits-default" style={{ marginRight: '5px'}}>
                    {product.price}
                </p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
                {product.name}
            </p>
        </div>
    );
};

const ProductList = () => {
    const buns = burgerData.filter((product) => product.type === 'bun');
    const sauces = burgerData.filter((product) => product.type === 'sauce');
    const fillings = burgerData.filter((product) => product.type === 'main');
    
    return (
        <div className="product-list-container">
            <div className='product-list-title'>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <IngredientTab />
            <div className='product-list-block'> 
                <>
                    <p className="text text_type_main-medium product-category">Булки</p>
                    <div className="product-list">
                        {buns.map((product) => (
                        <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </>
                <>
                    <p className="text text_type_main-medium product-category">Соусы</p>
                    <div className="product-list">
                        {sauces.map((product) => (
                        <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </>
                <>
                    <p className="text text_type_main-medium product-category">Начинки</p>
                    <div className="product-list">
                        {fillings.map((product) => (
                        <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </>
            </div>
        </div>
    );
};

export default ProductList


