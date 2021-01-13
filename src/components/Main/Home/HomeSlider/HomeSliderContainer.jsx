import React from 'react'
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import HomeSlider from './HomeSlider'
import withBreakpoints from './../../../HOC/withBreakpoints';


const HomeSliderContainer = ({ sliderData, queryMatches }) => {

    // console.log('HomeSliderContainer');

    const isMediaQueryMatch = queryMatches && queryMatches.sm;
    const cart = useSelector(createSelector(
        state => state.cart.selected,
        selected => selected
    ))

    return (
        <HomeSlider
            sliderData={sliderData}
            cart={cart}
            isMatch={isMediaQueryMatch}
        />
    )
}

HomeSliderContainer.propTypes = {
    sliderData: PropTypes.arrayOf(PropTypes.object).isRequired,
    queryMatches: PropTypes.exact({
        sm: PropTypes.bool.isRequired
    }),
};
HomeSliderContainer.defaultProps = {
    queryMatches: null
}

export default withBreakpoints(HomeSliderContainer, {
    sm: '(max-width: 650px)',
});
