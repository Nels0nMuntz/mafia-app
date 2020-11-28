import React from 'react'
import HomeSlide from './HomeSlide';

import { Carousel } from 'antd';

import './HomeSlider.scss'


const HomeSlider = ({ sliderData }) => {
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
    
    return (
        <div className="homeSlider">
            {sliderData.length && (
                <Carousel {...settings}>
                    {sliderData.map(slideData => (
                        <HomeSlide
                            key={`${slideData.title}_${slideData.id}`}
                            data={slideData}
                        />
                    ))}
                </Carousel>
            )}
        </div>
    )
};

export default HomeSlider;
