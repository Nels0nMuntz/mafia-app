import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from "reselect";

import ProductsCatalog from './ProductsCatalog';
import { requestPizzaCatalog } from '../../../redux/catalog-reducer';


const ProductsCatalogContainer = () => {

    const { url, params } = useRouteMatch("/:slag");
    const slag = params.slag;
    const dispatch = useDispatch();    
    const filterSelector = createSelector(
        state => state.catalog[slag],
        state => state.catalog.fastSortCategory,
        (catalog, fastSortrCategory) => {
            if(fastSortrCategory === 'default') return catalog.list;
            return catalog.list.filter(item => item.category === fastSortrCategory);
        }
    )
    const list = useSelector(filterSelector) ?? [];

    React.useEffect(() => {
        dispatch(requestPizzaCatalog());
    }, []);

    return (
        <Route exact path={url} >
            <ProductsCatalog
                list={list}
            />
        </Route>

    )
}

export default ProductsCatalogContainer
