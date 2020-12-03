import React from 'react';
import { Breadcrumb } from 'antd';

import ProductCard from './ProductCard';

import style from './ProductsCatalog.module.scss'
import withBreadcrumbs from './../../HOC/withBreadcrumbs';


const ProductsCatalog = ({breadcrumbItems, catalog}) => { console.log(catalog);

    const children = () => (catalog.map(item => (<ProductCard key={`${item.id}_${item.title}`} cardData={item} />)));
    // const children = React.useMemo(() => (pizzaCatalog.map(item => ( <ProductCard key={`${item.id}_${item.title}`} cardData={item} /> )) ), [pizzaCatalog]);

    return (
        <section className={style.products_catalog}>
            <div className={style.products_breadcrumbs}>
                <div className={style.breadcrumbs_container}>
                    <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                </div>
            </div>
            <div className={style.products_container}>
                {catalog.length && children()}
            </div>
        </section>
    );
};

export default withBreadcrumbs(ProductsCatalog);
