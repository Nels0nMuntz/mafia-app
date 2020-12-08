import React from 'react'
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';
import ProductPage from './ProductsCatalog/ProductPage/ProductPage';

import style from './Main.module.scss'

const Main = () => {

    // match exists or null
    const match = useRouteMatch("/:branch/:menuItem/:product?/:productId?");
    const menuItem = match && match.params.menuItem;
    const product = match && match.params.product;
    const url = match && match.url;
    console.log(match);

    return (
        <main className={style.main}>
            <CategoryMenu />
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route exact path='/menu-dostavki'>
                    <Redirect to='/'/>
                </Route>
                <Route path='/menu-dostavki'>
                    {!product ? (
                        <React.Fragment>
                            <ProductsFilter menuItem={menuItem} />
                            <ProductsCatalogContainer 
                                menuItem={menuItem} 
                                url={url} 
                            />
                        </React.Fragment>
                    ) : (
                            <ProductPage />
                        )}
                </Route>
            </Switch>
        </main>
    )
};

export default Main
