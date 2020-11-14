import React from 'react'

import style from './ProductsFilter.module.scss'
import FilterDropdown from './../../libs-components/FilterDropdown/FilterDropdown';

const ProductsFilter = () => {
    return (
        <section className={style.products_filter}>
            <section className={style.products_filter_wrapper}>
                <h1 className={style.products_filter_title}>Pizza</h1>
                <div className={style.products_filter_catalog}>
                    <span>Сортировать</span>
                    <FilterDropdown/>
                </div>
            </section>
        </section>
    )
}

export default ProductsFilter
