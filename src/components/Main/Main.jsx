import React from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom';

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';

import style from './Main.module.scss'

const Main = () => {

    const match = useRouteMatch("/:slag"); 

    return (
        <main className={style.main}>
            <CategoryMenu />
            {match && <ProductsFilter slag={match.params.slag} />}
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route exact path={match && match.url} >
                    <ProductsCatalogContainer/>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
