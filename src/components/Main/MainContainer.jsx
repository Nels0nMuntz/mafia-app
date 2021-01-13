import React from 'react'
import { useRouteMatch } from 'react-router-dom';

import Main from './Main';
import { useSelector } from 'react-redux';


const MainContainer = () => {

    const match = useRouteMatch("/:branch/:menuItem/:product?/:productId?");
    const menuItem = match && match.params.menuItem;
    const product = match && match.params.product;
    const productId = match && match.params.productId;
    const readyToRender = useSelector(state => state.checkout.readyToRenderErrors);

    React.useEffect(() => window.scrollTo(0,0))

    return (
        <Main
            menuItem={menuItem}
            product={product}
            productId={productId}
            readyToRender={readyToRender}
        />
    )
}

export default MainContainer
