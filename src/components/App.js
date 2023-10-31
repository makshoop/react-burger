import React from 'react';
import AppHeader from './Header/AppHeader';
import BurgerConstructor from './burger-constructor/BurgerConstructor.jsx';
import ProductList from './burger-ingredients/BurgerIngredients';
import './index.css'

function App() {
    return (
        <>
            <AppHeader />
            <div className="app">
            <ProductList />
            <BurgerConstructor />
            </div>
        </>
    );
}

export default App;
