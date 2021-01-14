import React from 'react';
import { isEqual } from 'lodash'
import PropTypes from 'prop-types';

import ProductCardContainer from './ProductCardContainer';
import withBreadcrumbs from '../../HOC/withBreadcrumbs';

import style from './ProductsCatalog.module.scss'


const ProductsCatalog = React.memo(({ list, cart, BreadcrumbsComponent }) => {

    const children = () => list.map(item => {
        let data = item;
        let isProductOrdered = false;
        if (item.isSelected) {
            const selectedSizeId = item.sizes.find(elem => elem.isSelected).id;
            const cartProducts = cart.filter(elem => elem.productId === item.productId);
            const cartProductsItem = cartProducts.find(elem => elem.sizes.find(size => size.id === selectedSizeId && size.isSelected));
            data = cartProductsItem ?? item;
            isProductOrdered = !cartProducts.length;
        }
        return (
            <ProductCardContainer
                key={data.productId}
                cardData={data}
                isProductOrdered={isProductOrdered}
            />
        );
    });

    return (
        <section className={style.products_catalog}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.products_container}>
                {!!list.length && children()}
            </div>
        </section>
    );
}, (prevProps, nextProps) => (
    isEqual(prevProps.list, nextProps.list)
    && isEqual(prevProps.isFetching === nextProps.isFetching)
    && isEqual(prevProps.cart, nextProps.cart)
));

ProductsCatalog.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withBreadcrumbs(ProductsCatalog);
