import React from 'react'
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';

import style from './Main.module.scss'

const Main = () => {

    // match exists or null
    const match = useRouteMatch("/:branch/:slag");
    const slag = match && match.params.slag;

    return (
        <main className={style.main}>
            <CategoryMenu />
            {slag && <ProductsFilter slag={slag} />}
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                {slag ? (
                    <Route path='/menu-dostavki' >
                        <ProductsCatalogContainer
                            slag={slag}
                        />
                    </Route>
                ) : (
                    <Redirect to="/"/>
                )}
            </Switch>
        </main>
    )
}

export default Main
