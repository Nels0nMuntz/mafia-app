import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import detectElementOverflow from 'detect-element-overflow'

import FilterDropdown from './../../common/FilterDropdown/FilterDropdown';
import { requestSortCategories, requestFastCategories, changeCurrentSortCategory, changeCurrentFastCategory } from '../../../redux/catalog-reducer';
import FastCategories from './FastCategories/FastCategories';

import style from './ProductsFilter.module.scss'

const ProductsFilter = ({ menuItem }) => {

    const dispatch = useDispatch();

    const getSortCategories = createSelector(
        state => state.catalog.sortCategories,
        categories => categories
    );
    const getCurrentSortCategory = createSelector(
        state => state.catalog.currentSortCategory,
        currentCategory => currentCategory
    );
    const getFastCategories = createSelector(
        state => state.catalog.fastCategories,
        fastCategories => fastCategories,
    );
    const getCurrentFastCategory = createSelector(
        state => state.catalog.currentFastCategory,
        currentFastCategory => currentFastCategory
    );
    const getProductTitle = createSelector(
        state => state.catalog[menuItem],
        product => product ? product.title : '',
    );

    const categories = useSelector(getSortCategories);
    const fastCategories = useSelector(getFastCategories);
    const currentCategory = useSelector(getCurrentSortCategory);
    const currentFastCategory = useSelector(getCurrentFastCategory);
    const productTitle = useSelector(getProductTitle);

    const onClickFastCategory = category => dispatch(changeCurrentFastCategory(category));
    const onClickSortCategory = category => dispatch(changeCurrentSortCategory(category));

    React.useEffect(() => {
        if (!categories.length) dispatch(requestSortCategories());
        dispatch(requestFastCategories(menuItem));
    }, [menuItem]);

    return (
        <section
            className={
                classnames(
                    'products_filter',
                    style.products_filter
                )
            }
        >
            <div className={style.products_filter_wrapper}>
                <h1 className={style.products_filter_title}>{productTitle}</h1>
                <div className={style.products_filter_fast_wrapper}>
                    <FastCategories
                        fastCategories={fastCategories}
                        currentFastCategory={currentFastCategory}
                        callback={onClickFastCategory}
                    />
                </div>
                <div className={style.products_filter_catalog}>
                    <span>Сортировать: </span>
                    <FilterDropdown
                        list={categories}
                        value={currentCategory}
                        callback={onClickSortCategory}
                    />
                </div>
            </div>
        </section>
    )
};

export default React.memo(ProductsFilter);
