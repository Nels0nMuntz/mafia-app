import React from 'react'
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

import HomeSlideContainer from './HomeSlideContainer';

import './HomeSlider.scss'


const HomeSlider = ({ sliderData, cart, isMatch }) => {

    // console.log('HomeSlider');

    const settings = {
        autoplay: false,
        dots: false,
        arrows: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1790,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const children = () => (
        sliderData.map(item => {
            let data = item;
            let isProductOrdered = false;
            if (item.isSelected) {
                const selectedSizeId = item.sizes.find(elem => elem.isSelected).id;
                const filteredCart = cart.filter(elem => elem.productId === item.productId);
                isProductOrdered = !!filteredCart.length
                const cartItem = filteredCart.find(elem => elem.sizes.find(size => size.id === selectedSizeId && size.isSelected));
                if(cartItem) data = cartItem;
            };
            return (
                <HomeSlideContainer
                    key={data.id}
                    data={data}
                    isProductOrdered={isProductOrdered}
                />
            )
        })
    )

    return (
        <div className="homeSlider">
            {!!sliderData.length && (isMatch ? children() : <Carousel {...settings} children={children()}/>)}
        </div>
    )
};

HomeSlider.propTypes = {
    sliderData: PropTypes.arrayOf(PropTypes.object).isRequired,
    cart: PropTypes.arrayOf(PropTypes.object).isRequired,
    isMatch: PropTypes.bool,
}
HomeSlider.defaultProps = {
    isMatch: null,
}

export default HomeSlider;