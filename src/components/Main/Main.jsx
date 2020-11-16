import React from 'react'

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';

import style from './Main.module.scss'

const Main = () => {
    return (
        <main className={style.main}>
            <CategoryMenu />
            <ProductsFilter/>
        </main>
    )
}

export default Main
