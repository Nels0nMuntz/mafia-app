import React from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import withBreadcrumbs from './../../../HOC/withBreadcrumbs';
import GiftDropdown from './../../../common/GiftDropdown/GiftDropdown';
import Swicher from './../../../common/Swicher/Swicher';
import AdditionItem from './AdditionsItem/AdditionsItem';

import style from './ProductPage.module.scss'
import deliveyImgUrl_1 from './../../../../assets/images/delivery-icon1.png'
import deliveyImgUrl_2 from './../../../../assets/images/delivery-icon2.png'


const ProductPage = ({ BreadcrumbsComponent, product, onSetSize, onSetGift, onChangeAddition, onAddProduct, onIncreaseCount, onDecreaseCount, onRemoveProduct }) => {

    const cartProduct = useSelector(createSelector(
        state => state.cart.selected,
        selected => selected.find(elem => elem.id === product.uniqueId)
    ));
    const onClickDropdown = value => value === product.selectedGift ? undefined : onSetGift(value);
    const onClickButton = event => {
        const target = event.target;
        const button = target.className;
        if (product.prevButton === button) return;
        if (target.dataset.default) {
            onSetSize(product.sizes[0].weight, product.sizes[0].price, product.sizes[0].discount, false, button);
        } else {
            onSetSize(product.sizes[1].weight, product.sizes[1].price, product.sizes[1].discount, true, button);
        }
    };
    const onClickCheckbox = () => onSetSize(
        product.sizes[+(!product.checkbox)].weight,
        product.sizes[+(!product.checkbox)].price,
        product.sizes[+(!product.checkbox)].discount,
        !product.checkbox
    );
    const onClickOrder = () => cartProduct ? undefined : onAddProduct(product);
    const onClickPlusCount = () => onIncreaseCount(product.uniqueId);
    const onClickMinusCount = () => cartProduct.count > 1 ? onDecreaseCount(product.uniqueId) : onRemoveProduct(product.uniqueId);


    return (
        <section className={style.productPage}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.productPage__wrapper}>
                <article className={style.productPage__content}>
                    <div className={`${style.productPage__img} productPage__img`}>
                        <img src={product.smallImageUrl} alt="" />
                        <div className="product-tag__wrapper">
                            {product.tags && product.tags.map(({ id, type, content }) => (
                                <div
                                    key={id}
                                    className={`product-tag ${type === 'primary' ? 'primary-product-tag' : ''} ${type === 'secondary' ? 'secondary-product-tag' : ''}`}
                                >
                                    <span>{content}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.productPage__info}>
                        <h2>{product.title}</h2>
                        <div className={style.productPage__weight_block}>
                            <div className={style.productPage__weight}>{product.selectedSize.weight}</div>
                            {product.hasTwoSizes && (
                                <Swicher
                                    onClickButtonHandler={onClickButton}
                                    onClickCheckboxHandler={onClickCheckbox}
                                    isChecked={product.checkbox}
                                />
                            )}
                        </div>
                        <div className={style.productPage__description}>
                            {product.description.map((sentence, index) => <p key={index}>{sentence}</p>)}
                        </div>
                        <div className={style.productPage__footer}>
                            {product.hasGifts && (
                                <div className={`${style.productPage__gift} product-page__gift`}>
                                    <GiftDropdown
                                        list={product.gifts}
                                        value={product.selectedGift}
                                        callback={onClickDropdown}
                                    />
                                </div>
                            )}
                            <div className={style.productPage__price_block}>
                                <div className={style.productPage__price}>
                                    {product.hasDiscount && <span className={style.productPage__price_discount}>{product.selectedSize.discount} грн</span>}
                                    <span className={`${style.productPage__price_ordinary} ${product.hasDiscount ? style.width_discount : ''}`}>{product.selectedSize.price} грн</span>
                                </div>
                                <div className={style.productPage__order_btn}>
                                    <button
                                        className={classnames(
                                            'item-homeSlider__btn',
                                            'item-homeSlider__btn-mini',
                                        )}
                                        onClick={onClickOrder}
                                    >{cartProduct ? (
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
                                            <div className="order_count">{cartProduct.count}</div>
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
                            {product.hasBonuses && (
                                <div className={style.productPage__delivery}>
                                    {product.bonuses.map(({ id, type, content }) => (
                                        <div className={style.productPage__delivery_item} key={id}>
                                            <span><img src={type === 'delivery' ? deliveyImgUrl_1 : deliveyImgUrl_2} alt="" /></span>
                                            <span>{content}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </article>
                <aside className={style.productPage__additional}>
                    {product.hasAdditions && (
                        <div className={style.productPage__additional_inner}>
                            <h3>Дополнения</h3>
                            <div className={style.productPage__additional_container}>
                                {product.additions.map((item, index) => (
                                    <AdditionItem
                                        key={index}
                                        productId={product.uniqueId}
                                        additionData={item}
                                        disabled={!cartProduct}
                                        changeAddition={onChangeAddition}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    )
};

ProductPage.propTypes = {
    BreadcrumbsComponent: PropTypes.elementType.isRequired,
    product: PropTypes.object.isRequired,
}

export default withBreadcrumbs(ProductPage)
