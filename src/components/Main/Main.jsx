import React from 'react'
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';
import ProductPageContainer from './ProductsCatalog/ProductPage/ProductPageContainer';
import PopupCart from './PopupCart/PopupCart';

import style from './Main.module.scss'

const Main = () => {

    const match = useRouteMatch("/:branch/:menuItem/:product?/:productId?");
    const menuItem = match && match.params.menuItem;
    const product = match && match.params.product;
    const productId = match && match.params.productId;
    const url = match && match.url;

    return (
        <main className={style.main}>
            <CategoryMenu />
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Redirect exact from='/menu-dostavki' to='/' />
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
                            <ProductPageContainer
                                menuItem={menuItem}
                                productId={productId}
                            />
                        )}
                </Route>
            </Switch>
        </main>
    )
};

export default Main
