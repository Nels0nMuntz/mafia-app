import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Preloader from '../Preloader/Preloader';
import CategoryMenuContainer from './CategoryMenu/CategoryMenuContainer';
// import ProductsFilter from './ProductsFilter/ProductsFilter';
// import Home from './Home/Home';
// import ProductsCatalogContainer from './ProductsCatalog/ProductsCatalogContainer';
// import ProductPageContainer from './ProductsCatalog/ProductPage/ProductPageContainer';
// import CheckoutContainer from './Checkout/CheckoutContainer';
import CheckoutWarningsContainer from './CheckoutWarnings/CheckoutWarningsContainer';
// import CheckoutFinish from './Checkout/CheckoutFinish/CheckoutFinish';

import style from './Main.module.scss'

const Home = React.lazy(() => import('./Home/Home'));
const ProductsFilter = React.lazy(() => import('./ProductsFilter/ProductsFilter'));
const ProductPageContainer = React.lazy(() => import('./ProductsCatalog/ProductPage/ProductPageContainer'));
const ProductsCatalogContainer = React.lazy(() => import('./ProductsCatalog/ProductsCatalogContainer'));
const CheckoutContainer = React.lazy(() => import('./Checkout/CheckoutContainer'));
const CheckoutFinish = React.lazy(() => import('./Checkout/CheckoutFinish/CheckoutFinish'));


const Main = React.memo(({ menuItem, product, productId, readyToRender }) => {

    return (
        <main className={style.main}>
            <Suspense fallback={<Preloader />}>
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
            </Suspense>
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
