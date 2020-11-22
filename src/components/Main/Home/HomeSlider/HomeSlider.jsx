import React from 'react'
import { Carousel } from 'antd';

import './HomeSlider.scss'
import imgUrl from './../../../../assets/images/home_slider_test.jpeg'

const HomeSlider = () => {

    const settings = {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1599,
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
                breakpoint: 649,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className="homeSlider">
            <Carousel {...settings}>
                <div className="homeSlider__item item-homeSlider">
                    <div className="item-homeSlider__content">
                        <img src={imgUrl} alt='' />
                        <div className="item-homeSlider__info">
                            <h3>Мафия</h3>
                            <div className="item-homeSlider__weight-block">
                                <div className="item-homeSlider__weight">570 г.</div>
                                <div className="item-homeSlider__swicher swicher-homeSlider">
                                    <span>Средняя</span>
                                    <label>
                                        <input className="visually-hidden" type="checkbox"/>
                                        <span/>
                                    </label>
                                    <span>Большая</span>
                                </div>
                            </div>
                            <p className="item-homeSlider__descr">Ролл филадельфия кунсей, Ролл калифорния, Маки с масляной, Маки с лососем, Ролл филадельфия с лососем, Чизу ролл</p>
                        </div>
                    </div>
                </div>

                <div className="homeSlider__item item-homeSlider">
                    <div className="item-homeSlider__content">
                        <img src={imgUrl} alt='' />
                        <div className="item-homeSlider__info">
                            <h3>Мафия</h3>
                            <div className="item-item-homeSlider__weight-block">
                                <span className="item-homeSlider__weight"></span>
                                <span className="item-homeSlider__weight"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeSlider__item item-homeSlider">
                    <div className="item-homeSlider__content">
                        <img src={imgUrl} alt='' />
                        <div className="item-homeSlider__info">
                            <h3>Мафия</h3>
                            <div className="item-item-homeSlider__weight-block">
                                <span className="item-homeSlider__weight"></span>
                                <span className="item-homeSlider__weight"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeSlider__item item-homeSlider">
                    <div className="item-homeSlider__content">
                        <img src={imgUrl} alt='' />
                        <div className="item-homeSlider__info">
                            <h3>Мафия</h3>
                            <div className="item-item-homeSlider__weight-block">
                                <span className="item-homeSlider__weight"></span>
                                <span className="item-homeSlider__weight"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeSlider
