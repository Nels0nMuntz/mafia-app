import React from 'react';
import { Breadcrumb } from 'antd';
import { isEqual } from 'lodash'

import ProductCard from './ProductCard';
import withBreadcrumbs from '../../HOC/withBreadcrumbs';
import Preloader from './../../Preloader/Preloader';

import style from './ProductsCatalog.module.scss'


const ProductsCatalog = React.memo(({ breadcrumbItems, separator, list, isFetching }) => {

    const children = () => (list.map(item => (<ProductCard key={`${item.id}_${item.title}`} cardData={item} />)));

    return (

        isFetching ? <Preloader /> : (
            <section className={style.products_catalog}>
                <div className={style.products_breadcrumbs}>
                    <div className={style.breadcrumbs_container}>
                        <Breadcrumb
                            separator={separator}
                        >
                            {breadcrumbItems}
                        </Breadcrumb>
                    </div>
                </div>
                <div className={style.products_container}>
                    {list.length && children()}
                </div>
            </section>
        )
    );
}, (prevProps, nextProps) => isEqual(prevProps.list, nextProps.list) && prevProps.isFetching === nextProps.isFetching);

export default withBreadcrumbs(ProductsCatalog);
