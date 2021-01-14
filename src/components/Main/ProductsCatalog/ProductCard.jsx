import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import GiftDropdown from '../../common/GiftDropdown/GiftDropdown';
import Swicher from './../../common/Swicher/Swicher';

import './../Home/HomeSlider/HomeSlider.scss'


const ProductCard = ({
    data,
    selectedSize,
    selectedGift,
    url,
    onClickDropdown,
    onClickButton,
    onClickCheckbox,
    onClickOrder,
    onClickPlusCount,
    onClickMinusCount,
    onePrice = false,
}) => {

    return (
        <article className="products_catalog_item_wrapper">
            <div className="homeSlider__item item-homeSlider">
                <div className="item-homeSlider__content">
                    <div className="product-tag__wrapper">
                        {data.tags && data.tags.map(({ id, type, content }) => (
                            <div
                                key={id}
                                className={`product-tag ${type === 'primary' ? 'primary-product-tag' : ''} ${type === 'secondary' ? 'secondary-product-tag' : ''}`}
                            >
                                <span>{content}</span>
                            </div>
                        ))}
                    </div>
                    <Link to={`${url}/product/${data.id}${data.category ? `?fast=${data.category}` : ''}`} className='item-homeSlider__link'>
                        <img
                            src={data.images.bigImageUrl}
                            alt=''
                        />
                    </Link>
                    <div className="item-homeSlider__info">
                        <Link to={`${url}/product/${data.id}${data.category ? `?fast=${data.category}` : ''}`} className='item-homeSlider__link'>
                            <h3>{data.title}</h3>
                        </Link>
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
                            {onePrice ? (
                                <div className="item-homeSlider__price">{`${selectedSize.discount || selectedSize.price} грн.`}</div>
                            ) : (
                                    <div className={`item-homeSlider__price ${selectedSize.discount ? 'with-discount' : ''}`}>
                                        {selectedSize.discount ? <span className="item-homeSlider__price-discount">{selectedSize.discount} грн</span> : null}
                                        <span className="item-homeSlider__price-ordinary">{`${selectedSize.price} грн`}</span>
                                    </div>
                                )}
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
                                    'item-homeSlider__btn',
                                    data.isSelected && data.uniqueId && 'in-cart'
                                )}
                                onClick={!data.uniqueId ? onClickOrder : undefined}
                            >{data.isSelected && data.uniqueId ? (
                                <div className="item-homeSlider__btn_ordered">
                                    <div
                                        className={classnames(
                                            "order-manage",
                                            "order-minus",
                                        )}
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
        </article>
    )
};

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    selectedSize: PropTypes.object.isRequired,
    selectedGift: PropTypes.object,
    url: PropTypes.string.isRequired,
    onClickDropdown: PropTypes.func.isRequired,
    onClickButton: PropTypes.func.isRequired,
    onClickCheckbox: PropTypes.func.isRequired,
    onClickOrder: PropTypes.func.isRequired,
    onClickPlusCount: PropTypes.func.isRequired,
    onClickMinusCount: PropTypes.func.isRequired,
    onePrice: PropTypes.bool,
};

export default ProductCard
