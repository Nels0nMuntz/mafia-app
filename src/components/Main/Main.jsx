import React from 'react'

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalog from './ProductsCatalog/ProductsCatalog';

import style from './Main.module.scss'
import { Route, useRouteMatch } from 'react-router-dom';

const Main = () => {

    let match = useRouteMatch("/menu-dostavki/:slag");

    return (
        <main className={style.main}>
            <CategoryMenu />
            {match && <ProductsFilter/>}
            <Route path='/' exact >
                <Home />
            </Route>
            <Route path='/menu-dostavki/pizza' >
                <ProductsCatalog />
            </Route>
        </main>
    )
}

export default Main
