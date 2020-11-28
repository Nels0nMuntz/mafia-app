import React from 'react'
import classnames from 'classnames'

import GiftDropdown from './../../../../libs-components/GiftDropdown/GiftDropdown';

import './HomeSlider.scss'


const HomeSlide = ({ data }) => {

    const [slideData, setSlideData] = React.useState(() => ({
        ...data,
        checkboxState: false,
        selected: {
            size: data.sizes[0],
            gift: data.gifts[0],
        },
    }));

    const onClickDropdown = ({ key }) => {
        return key === slideData.selected.gift ? undefined : (
            setSlideData({
                ...slideData,
                selected: {
                    ...slideData.selected,
                    gift: key
                },
            })
        ) 
    };

    const onClickCheckbox = () => {
        console.log(slideData.checkboxState);
        setSlideData({
            ...slideData,
            checkboxState: !slideData.checkboxState,
            selected: {
                ...slideData.selected,
                size: data.sizes[+(!slideData.checkboxState)]
            },
        })
    }

    // console.log('RENDER HomeSlide');

    return (
        <div className="homeSlider__item item-homeSlider" key={`homeSlider_${slideData.id}`}>
            <div className="item-homeSlider__content">
                <img src={slideData.imageUrl} alt='' />
                <div className="item-homeSlider__info">
                    <h3>{slideData.title}</h3>
                    <div className="item-homeSlider__weight-block">
                        <div className="item-homeSlider__weight">{slideData.selected.size.weight}</div>
                        {slideData.sizes.length === 2 ? (
                            <div className="item-homeSlider__swicher swicher-homeSlider">
                                <span>{slideData.sizes[0].value}</span>
                                <div
                                    className="swicher-homeSlider__checkbox"
                                    onClick={onClickCheckbox}
                                >
                                    <span 
                                        className={`${slideData.checkboxState ? 'checked' : ''}`}
                                    />
                                </div>
                                {/* <label>
                                    <input className="visually-hidden" type="checkbox" />
                                    <span />
                                </label> */}
                                <span>{slideData.sizes[1].value}</span>
                            </div>
                        ) : null}
                    </div>
                    <p className="item-homeSlider__descr">{slideData.description}</p>
                    <div className="item-homeSlider__price-gift">
                        <div className="item-homeSlider__price">{`${slideData.selected.size.price} грн.`}</div>
                        <div className="item-homeSlider__gift-block gift-block">
                            {slideData.gifts.length ? (
                                <GiftDropdown
                                    list={slideData.gifts}
                                    value={slideData.selected.gift}
                                    callback={onClickDropdown}
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="item-homeSlider__order">
                        <button className="item-homeSlider__btn">Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeSlide;
