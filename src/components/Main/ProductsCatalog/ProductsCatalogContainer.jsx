import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductsCatalog from './ProductsCatalog';
import { requestPizzaCatalog } from '../../../redux/catalog-reducer';


const ProductsCatalogContainer = () => {

    let { url, params } = useRouteMatch("/:slag");
    const slag = params.slag;

    const dispatch = useDispatch();
    const catalog = useSelector(state => state.catalog[slag]);
    React.useEffect(() => {
        dispatch(requestPizzaCatalog());
    }, []);

    return (
        <Route exact path={url} >
            <ProductsCatalog
                catalog={catalog}
            />
        </Route>

    )
}

export default ProductsCatalogContainer
