import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import style from './ProductsFilter.module.scss'

import FilterDropdown from './../../../libs-components/FilterDropdown/FilterDropdown';
import { requestSortCategories } from '../../../redux/filter-reducer';

const ProductsFilter = () => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.filter.categories)

    useEffect(() => {
        dispatch(requestSortCategories())
    }, [])

    return (
        <section className={
            classnames(
                'products_filter',
                style.products_filter
            )
        }>
            <div className={style.products_filter_wrapper}>
                <h1 className={style.products_filter_title}>Pizza</h1>
                <div className={style.products_filter_catalog}>
                    <span>Сортировать: </span>
                    <FilterDropdown
                        list={categories}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductsFilter
