import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import FilterDropdown from './../../../libs-components/FilterDropdown/FilterDropdown';
import { changeCurrentCategory, requestSortCategories } from '../../../redux/filter-reducer';
import FastCategories from './FastCategories/FastCategories';
import { changeFastCategory } from '../../../redux/catalog-reducer';

import style from './ProductsFilter.module.scss'

const ProductsFilter = ({ slag }) => {

    const dispatch = useDispatch();
    const onClickFastCategory = category => dispatch(changeFastCategory(category));
    const onClickCategory = category => dispatch(changeCurrentCategory(category));

    const getCurrentCategory = createSelector(
        state => state.filter.currentCategory,
        currentCategory => currentCategory
    );
    const getSortCategories = createSelector(
        state => state.filter.categories,
        categories => categories
    );
    const getFastCategories = createSelector(
        state => state.catalog[slag],
        product => product.fastCategories ?? [],
    );
    const getProductTitle = createSelector(
        state => state.catalog[slag],
        product => product.title ?? '',
    );

    const currentCategory = useSelector(getCurrentCategory);
    const categories = useSelector(getSortCategories);
    const fastCategories = useSelector(getFastCategories);
    const productTitle = useSelector(getProductTitle);


    React.useEffect(() => {
        dispatch(requestSortCategories());
    }, []);

    return (
        <section className={
            classnames(
                'products_filter',
                style.products_filter
            )
        }>
            <div className={style.products_filter_wrapper}>
                <h1 className={style.products_filter_title}>{productTitle}</h1>
                <FastCategories
                    fastCategories={fastCategories}
                    callback={onClickFastCategory}
                />
                <div className={style.products_filter_catalog}>
                    <span>Сортировать: </span>
                    <FilterDropdown
                        list={categories}
                        value={currentCategory}
                        callback={onClickCategory}
                    />
                </div>
            </div>
        </section>
    )
};

export default ProductsFilter;
