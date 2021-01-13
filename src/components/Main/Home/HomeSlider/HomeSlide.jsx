import React from 'react'
import classnames from 'classnames'

import GiftDropdown from './../../../common/GiftDropdown/GiftDropdown';

import './HomeSlider.scss'
import Swicher from './../../../common/Swicher/Swicher';


const HomeSlide = ({ 
    data, 
    selectedSize, 
    selectedGift,
    onClickButton,
    onClickCheckbox,
    onClickDropdown,
    onClickOrder,
    onClickPlusCount,
    onClickMinusCount,
}) => {

    return (
        <div className="homeSlider__item item-homeSlider" key={`homeSlider_${data.id}`}>
            <div className="item-homeSlider__content">
                <img src={data.images.bigImageUrl} alt='' />
                <div className="item-homeSlider__info">
                    <h3>{data.title}</h3>
                    <div className="item-homeSlider__weight-block">
                        <div className="item-homeSlider__weight">{selectedSize.weight}</div>
                        {data.hasTwoSizes ? (
                            <Swicher
                                sizes={data.sizes}
                            onClickButtonHandler={onClickButton}
                            onClickCheckboxHandler={onClickCheckbox}
                            />
                        ) : null}
                    </div>
                    <p className="item-homeSlider__descr">{data.description}</p>
                    <div className="item-homeSlider__price-gift">
                        <div className="item-homeSlider__price">{`${selectedSize.discount || selectedSize.price} грн.`}</div>
                        <div className="item-homeSlider__gift-block gift-block">
                            {data.hasGifts ? (
                                <GiftDropdown
                                    list={data.gifts}
                                    value={selectedGift.content}
                                    callback={onClickDropdown}
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="item-homeSlider__order">
                        <button
                            className={classnames(
                                "item-homeSlider__btn",
                                data.isSelected && data.uniqueId && 'in-cart'
                            )}
                            onClick={!data.uniqueId ? onClickOrder : undefined}
                        >{data.isSelected && data.uniqueId ? (
                            <div className="item-homeSlider__btn_ordered">
                                <div
                                    className={ "order-manage order-minus"}
                                    onClick={onClickMinusCount}
                                >
                                    <svg width="16" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="2" x2="20" y2="2" stroke="#E1B787" strokeWidth="4" />
                                    </svg>
                                </div>
                                <div className="order_count">{data.count}</div>
                                <div
                                    className="order-manage order-plus"
                                    onClick={onClickPlusCount}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="8" x2="8" y2="16" stroke="#E1B787" strokeWidth="3" />
                                        <line y1="8" x2="16" y2="8" stroke="#E1B787" strokeWidth="3" />
                                    </svg>
                                </div>
                            </div>
                        ) : 'Заказать'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeSlide;
