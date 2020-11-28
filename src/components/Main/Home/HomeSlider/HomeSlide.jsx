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

    const onClickCheckbox = (event) => {
        // it will work when click on some of cerain size heppened
        if (event.target.dataset.value) {
            const value = event.target.dataset.value;
            // this condition helps React to avoid making unnecessary rerenders
            if(value === slideData.selected.size.value) return
            value === slideData.sizes[0].value && (
                setSlideData({
                    ...slideData,
                    checkboxState: false,
                    selected: {
                        ...slideData.selected,
                        size: data.sizes[0]
                    },
                })
            );
            event.target.dataset.value === slideData.sizes[1].value && (
                setSlideData({
                    ...slideData,
                    checkboxState: true,
                    selected: {
                        ...slideData.selected,
                        size: data.sizes[1]
                    },
                })
            );
        }
        // it will work when click on checkbox heppened
        else {
            setSlideData({
                ...slideData,
                checkboxState: !slideData.checkboxState,
                selected: {
                    ...slideData.selected,
                    size: data.sizes[+(!slideData.checkboxState)]
                },
            })
        }
    }

    console.log('RENDER HomeSlide');

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
                                <span
                                    data-value={slideData.sizes[0].value}
                                    onClick={onClickCheckbox}
                                >{slideData.sizes[0].value}</span>
                                <div
                                    className={classnames(
                                        "swicher-homeSlider__checkbox",
                                        slideData.checkboxState && 'checked'
                                    )}
                                    onClick={onClickCheckbox}
                                >
                                    <span />
                                </div>
                                <span
                                    data-value={slideData.sizes[1].value}
                                    onClick={onClickCheckbox}
                                >{slideData.sizes[1].value}</span>
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
                        <button 
                            className="item-homeSlider__btn"
                            onClick={() => console.log(slideData)}
                        >Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeSlide;
