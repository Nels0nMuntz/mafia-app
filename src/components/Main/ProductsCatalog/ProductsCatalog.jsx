import React from 'react';

import style from './ProductsCatalog.module.scss'
import ProductCard from './ProductCard/ProductCard';


const ProductsCatalog = () => {
    return (
        <section className={style.products_catalog}>
            <div className={style.products_breadcrumbs}>
                <div className={style.breadcrumbs_container}>
                    <span>breadcrumbs</span>
                </div>
            </div>
            <div className={style.products_container}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

export default ProductsCatalog
