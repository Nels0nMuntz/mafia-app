import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "reselect";

import ProductsCatalog from './ProductsCatalog';
import { requestPizzaCatalog } from '../../../redux/catalog-reducer';


const ProductsCatalogContainer = ({ menuItem, url }) => {
    
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.catalog.isFetchingCatalog);
    const filterSelector = createSelector(
        state => state.catalog[menuItem],
        state => state.catalog.currentFastCategory,
        state => state.catalog.currentSortCategory,
        (catalog, currentFastCategory, currentSortCategory) => {
            const sortByFastCategory = currentFastCategory === 'default' ? catalog.list ?? [] : catalog.list.filter(item => item.category === currentFastCategory);
            switch (currentSortCategory) {
                case 'по популярности':
                    return [...sortByFastCategory.sort((a, b) => new Date(b.added) - new Date(a.added))];
                case 'по новизне':
                    return [...sortByFastCategory.sort((a, b) => b.rate - a.rate)];
                case 'по убыванию цен':
                    return [...sortByFastCategory.sort((a, b) => b.sizes[0].price - a.sizes[0].price)];
                case 'по возростанию цен':
                    return [...sortByFastCategory.sort((a, b) => a.sizes[0].price - b.sizes[0].price)];
                case 'по алфавиту':
                    return [...sortByFastCategory.sort(function (a, b) {
                        const nameA = a.title.toLowerCase();
                        const nameB = b.title.toLowerCase()
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    })];
                default:
                    return sortByFastCategory;
            }
        }
    );
    const list = useSelector(filterSelector) ?? [];

    React.useEffect(() => {
        if (list.length) return;
        dispatch(requestPizzaCatalog());
    }, []);

    return (
        <ProductsCatalog
            list={list}
            isFetching={isFetching}
            url={url}
        />
    )
}

export default ProductsCatalogContainer
