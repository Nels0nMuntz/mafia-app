import React from 'react';
import { isEqual } from 'lodash'

import ProductCardContainer from './ProductCardContainer';
import withBreadcrumbs from '../../HOC/withBreadcrumbs';

import style from './ProductsCatalog.module.scss'


const ProductsCatalog = React.memo(({ BreadcrumbsComponent, list, url, fastCategories }) => {

    const children = () => (list.map(item => (
        <ProductCardContainer
            key={`${item.id}_${item.title}`}
            cardData={item}
            url={url}
            fastCategories={fastCategories}
        />
    )));

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
}, (prevProps, nextProps) => isEqual(prevProps.list, nextProps.list) && prevProps.isFetching === nextProps.isFetching && isEqual(prevProps.fastCategories, nextProps.fastCategories));

export default withBreadcrumbs(ProductsCatalog);
