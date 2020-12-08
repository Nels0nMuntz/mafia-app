import React from 'react';
import { isEqual } from 'lodash'

import ProductCard from './ProductCard';
import withBreadcrumbs from '../../HOC/withBreadcrumbs';
import Preloader from './../../Preloader/Preloader';

import style from './ProductsCatalog.module.scss'


const ProductsCatalog = React.memo(({ BreadcrumbsComponent, list, isFetching, url }) => {

    const children = () => (list.map(item => (
        <ProductCard 
            key={`${item.id}_${item.title}`} 
            cardData={item}
            url={url}
        />
    )));

    return (
        isFetching ? <Preloader /> : (
            <section className={style.products_catalog}>
                <BreadcrumbsComponent/>
                <div className={style.products_container}>
                    {list.length && children()}
                </div>
            </section>
        )
    );
}, (prevProps, nextProps) => isEqual(prevProps.list, nextProps.list) && prevProps.isFetching === nextProps.isFetching);

export default withBreadcrumbs(ProductsCatalog);
