import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import CategoryMenuContainer from './CategoryMenu/CategoryMenuContainer';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import Home from './Home/Home';
import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';
import ProductPageContainer from './ProductsCatalog/ProductPage/ProductPageContainer';
import CheckoutContainer from './Checkout/CheckoutContainer';
import CheckoutWarningsContainer from './CheckoutWarnings/CheckoutWarningsContainer';
import CheckoutFinish from './Checkout/CheckoutFinish/CheckoutFinish';

import style from './Main.module.scss'

const Main = React.memo(({ menuItem, product, productId, readyToRender }) => {

    return (
        <main className={style.main}>
            <CategoryMenuContainer
                menuItem={menuItem}
            />
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

Main.propTypes = {
    menuItem: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
    readyToRender: PropTypes.bool.isRequired,
};

export default Main
