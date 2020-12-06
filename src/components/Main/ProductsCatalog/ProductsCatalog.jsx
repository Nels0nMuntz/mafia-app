import React from 'react';
import { Breadcrumb } from 'antd';

import ProductCard from './ProductCard';

import style from './ProductsCatalog.module.scss'
import withBreadcrumbs from '../../HOC/withBreadcrumbs';


const ProductsCatalog = React.memo(({ breadcrumbItems, separator, list }) => {

    const children = () => (list.map(item => (<ProductCard key={`${item.id}_${item.title}`} cardData={item} />)));

    return (
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
    );
}, (prevProps, nextProps) => prevProps.list === nextProps.list);

export default withBreadcrumbs(ProductsCatalog);
