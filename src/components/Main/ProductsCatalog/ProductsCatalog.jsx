import React from 'react';
import { isEqual } from 'lodash'

import ProductCardContainer from './ProductCardContainer';
import withBreadcrumbs from '../../HOC/withBreadcrumbs';

import style from './ProductsCatalog.module.scss'


const ProductsCatalog = React.memo(({ list, cart, url, fastCategories, menuItem, BreadcrumbsComponent }) => {

    const children = () => list.map(item => {
        if (item.isSelected) {
            const selectedSizeId = item.sizes.find(elem => elem.isSelected).id;
            const cartProducts = cart.filter(elem => elem.productId === item.productId);
            const cartProductsItem = cartProducts.find(elem => elem.sizes.find(size => size.id === selectedSizeId && size.isSelected));
            if (cartProductsItem) {
                return (
                    <ProductCardContainer
                        key={cartProductsItem.uniqueId}
                        cardData={cartProductsItem}
                        url={url}
                        fastCategories={fastCategories}
                        menuItem={menuItem}
                        isEmptyCart={!cartProducts.length}
                    />
                )
            } else {
                return (
                    <ProductCardContainer
                        key={item.productId}
                        cardData={item}
                        url={url}
                        fastCategories={fastCategories}
                        menuItem={menuItem}
                    />
                )
            }
        } else {
            return (
                <ProductCardContainer
                    key={item.productId}
                    cardData={item}
                    url={url}
                    fastCategories={fastCategories}
                    menuItem={menuItem}
                />
            )
        }
    });

    return (
        <section className={style.products_catalog}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.products_container}>
                {list.length && children()}
            </div>
        </section>
    );
}, (prevProps, nextProps) => (
    isEqual(prevProps.list, nextProps.list)
    && isEqual(prevProps.isFetching === nextProps.isFetching)
    && isEqual(prevProps.fastCategories, nextProps.fastCategories)
    && isEqual(prevProps.cart, nextProps.cart)
));

export default withBreadcrumbs(ProductsCatalog);
