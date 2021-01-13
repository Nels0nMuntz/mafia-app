import React from 'react'
import { Carousel } from 'antd';

import PizzaSlide from './DeliverySlides/PizzaSlide';
import SushiSlide from './DeliverySlides/SushiSlide';
import ProductySlide from './DeliverySlides/ProductySlide';
import SalatySlide from './DeliverySlides/SalatySlide';
import SupySlide from './DeliverySlides/SupySlide';
import GoryachieBludaSlide from './DeliverySlides/GoryachieBludaSlide';
import GruzinskieBludaSlide from './DeliverySlides/GruzinskieBludaSlide';
import DesertySlide from './DeliverySlides/DesertySlide';
import NapitkiSlide from './DeliverySlides/NapitkiSlide';

import './DeliverySlider.scss'


const DeliverySlider = () => {

    const settings = {
        autoplay: false,
        dots: false,
        arrows: true,
        autoplaySpeed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };


    return (
        <div className="deliverySlider">
            <Carousel {...settings}>
                <PizzaSlide/>
                <SushiSlide/>
                <ProductySlide/>
                <SalatySlide/>                
                <SupySlide/>                
                <GoryachieBludaSlide/>                
                <GruzinskieBludaSlide/>                
                <DesertySlide/>                
                <NapitkiSlide/>     
            </Carousel>
        </div>
    )
};

export default DeliverySlider;
