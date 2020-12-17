import React from 'react'
import { useRouteMatch } from 'react-router-dom';

import Main from './Main';


const MainContainer = () => {

    const match = useRouteMatch("/:branch/:menuItem/:product?/:productId?");
    const menuItem = match && match.params.menuItem;
    const product = match && match.params.product;
    const productId = match && match.params.productId;
    const url = match && match.url;

    return (
        <Main
            menuItem={menuItem}
            product={product}
            productId={productId}
            url={url}
        />
    )
}

export default MainContainer
