import React from 'react'
import { Carousel } from 'antd';

import GiftDropdown from './../../../../libs-components/GiftDropdown/GiftDropdown';

import './HomeSlider.scss'
import imgUrl from './../../../../assets/images/home_slider_test.jpeg'

const HomeSlider = ({ sliderData }) => {

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
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <div className="homeSlider">
            {sliderData.length && (
                <Carousel {...settings}>
                    {sliderData.map(({id, title, description, imageUrl, gifts, sizes}) => (
                        <div className="homeSlider__item item-homeSlider" key={`homeSlider_${id}`}>
                            <div className="item-homeSlider__content">
                                <img src={imageUrl} alt='' />
                                <div className="item-homeSlider__info">
                                    <h3>{title}</h3>
                                    <div className="item-homeSlider__weight-block">
                                        <div className="item-homeSlider__weight">570 г.</div>
                                        <div className="item-homeSlider__swicher swicher-homeSlider">
                                            <span>Средняя</span>
                                            <label>
                                                <input className="visually-hidden" type="checkbox" />
                                                <span />
                                            </label>
                                            <span>Большая</span>
                                        </div>
                                    </div>
                                    <p className="item-homeSlider__descr">Ролл филадельфия кунсей, Ролл калифорния, Маки с масляной, Маки с лососем, Ролл филадельфия с лососем, Чизу ролл</p>
                                    <div className="item-homeSlider__price-gift">
                                        <div className="item-homeSlider__price">399 грн.</div>
                                        <div className="item-homeSlider__gift-block gift-block">
                                            <GiftDropdown />
                                        </div>
                                    </div>
                                    <div className="item-homeSlider__order">
                                        <button className="item-homeSlider__btn">Заказать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export default HomeSlider
