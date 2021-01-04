import React from 'react'
import { useRouteMatch } from 'react-router-dom';

import Main from './Main';
import { useSelector } from 'react-redux';


const MainContainer = () => {

    const match = useRouteMatch("/:branch/:menuItem/:product?/:productId?");
    const menuItem = match && match.params.menuItem;
    const product = match && match.params.product;
    const productId = match && match.params.productId;
    const url = match && match.url;
    const readyToRender = useSelector(state => state.checkout.readyToRender);

    return (
        <Main
            menuItem={menuItem}
            product={product}
            productId={productId}
            url={url}
            readyToRender={readyToRender}
        />
    )
}

export default MainContainer
