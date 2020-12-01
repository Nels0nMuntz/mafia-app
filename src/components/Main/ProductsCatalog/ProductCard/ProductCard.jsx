import React from 'react'

import './../../Home/HomeSlider/HomeSlider.scss'

import imageUrl from './../../../../assets/images/pizza.jpeg'

const ProductCard = () => {
    return (
        <div className="products_catalog_item_wrapper">
            <div className="homeSlider__item item-homeSlider">
                <div className="item-homeSlider__content">
                    <img src={imageUrl} alt='' />
                    <div className="item-homeSlider__info">
                        <h3>Карибская</h3>
                        {/* <div className="item-homeSlider__weight-block">
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
                    </div> */}
                        <p className="item-homeSlider__descr">Атлантика: креветки, филе лосося, сыр пармезан, шпинат, томаты, сливки, чеснок Американо: филе куриное sous-vide, колбаски охотничьи, пепперони, сыр моцарелла, кукуруза, болгарский перец, лук конфитюр, соус BBQ, соус маринара, горчица Поло: филе куриное sous-vide, сыр моцарелла, ананас, болгарский перец, чеснок, соус маринара, соус ВВQ
            </p>
                        {/* <div className="item-homeSlider__price-gift">
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
                    </div> */}
                        <div className="item-homeSlider__order">
                            <button
                                className="item-homeSlider__btn"
                            // onClick={() => console.log(slideData)}
                            >Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
