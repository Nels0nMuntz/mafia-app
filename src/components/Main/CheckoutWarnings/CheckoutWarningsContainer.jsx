import React from 'react'

import CheckoutWarnings from './CheckoutWarnings';
import { useSelector } from 'react-redux';


const CheckoutWarningsContainer = () => {

    const errors = useSelector(state => state.checkout.errors);
    const isVisible = useSelector(state => state.checkout.isVisible);

    return (
        <CheckoutWarnings
            errors={errors}
            isVisible={isVisible}
        />
    )
}

export default CheckoutWarningsContainer
