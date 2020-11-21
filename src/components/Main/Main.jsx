import React from 'react'

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';

import style from './Main.module.scss'
import { Route } from 'react-router-dom';

const Main = () => {
    return (
        <main className={style.main}>
            <CategoryMenu />
            {/* <ProductsFilter/> */}
            <Route path='/' exact >
                <Home />
            </Route>
        </main>
    )
}

export default Main
