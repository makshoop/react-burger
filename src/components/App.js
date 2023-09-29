import React from 'react';
import AppHeader from './header/AppHeader';
import BurgerConstructor from './burger-constructor/BurgerConstructor.jsx';

function App() {
    return (
        <div className="app">
            <AppHeader />
            
                <BurgerConstructor />
            
        </div>
    );
}

export default App;
