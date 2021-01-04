import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import CategoryMenuContainer from './CategoryMenu/CategoryMenuContainer';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';
import ProductPageContainer from './ProductsCatalog/ProductPage/ProductPageContainer';
import CheckoutContainer from './Checkout/CheckoutContainer';
import CheckoutWarningsContainer from './CheckoutWarnings/CheckoutWarningsContainer';
import CheckoutFinish from './Checkout/CheckoutFinish/CheckoutFinish';

import style from './Main.module.scss'

const Main = React.memo(({ menuItem, product, productId, url, readyToRender }) => {

    return (
        <main className={style.main}>
            <CategoryMenuContainer />
            {readyToRender && <CheckoutWarningsContainer />}
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
                <Route path='/checkout'>
                    <CheckoutContainer />
                </Route>
                <Route path="/checkout-finish">
                    <CheckoutFinish />
                </Route>
            </Switch>
        </main>
    )
});

export default Main
