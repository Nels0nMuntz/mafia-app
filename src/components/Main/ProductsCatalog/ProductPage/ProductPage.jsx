import React from 'react'
import { PropTypes } from 'prop-types';
import classnames from 'classnames'
import { useDispatch } from 'react-redux';

import withBreadcrumbs from './../../../HOC/withBreadcrumbs';
import GiftDropdown from './../../../common/GiftDropdown/GiftDropdown';
import Swicher from './../../../common/Swicher/Swicher';
import AdditionItem from './AdditionsItem/AdditionsItem';

import style from './ProductPage.module.scss'
import deliveyImgUrl_1 from './../../../../assets/images/delivery-icon1.png'
import deliveyImgUrl_2 from './../../../../assets/images/delivery-icon2.png'
import { addProduct, changeProductGiftCart, changeProductSizeCart, decreaseCount, increaseCount, removeProduct, toggleProductSizeCart } from '../../../../redux/cart-reducer';
import { changeProductGift, changeProductSize, changeProductState, toggleProductSize } from '../../../../redux/catalog-reducer';


const ProductPage = ({ menuItem, product, cart, BreadcrumbsComponent }) => {

    const dispatch = useDispatch();
    const data = product.isSelected ? cart.find(item => item.uniqueId === product.uniqueId) : product;
    const isSelected = data.isSelected;
    const selectedSize = data.sizes.find(item => item.isSelected);
    const selectedGift = data.gifts.find(item => item.isSelected);

    const onClickButton = event => {
        const sizeId = +(event.target.dataset.sizeId);
        if (sizeId === selectedSize.id) return;
        dispatch(isSelected ? changeProductSizeCart(data.uniqueId, sizeId) : changeProductSize(menuItem, data.uniqueId, sizeId));
    };
    const onClickCheckbox = () => dispatch(isSelected ? toggleProductSizeCart(data.uniqueId) : toggleProductSize(menuItem, data.uniqueId));
    const onClickDropdown = value => {
        if (value === selectedGift.content) return;
        const giftId = data.gifts.find(item => item.content === value).id;
        dispatch(isSelected ? changeProductGiftCart(data.uniqueId, giftId) : changeProductGift(menuItem, data.uniqueId, giftId));
    };
    const onClickOrder = () => {
        dispatch(changeProductState(menuItem, data.uniqueId, true));
        dispatch(addProduct(data));
    };
    const onClickPlusCount = () => dispatch(increaseCount(data.uniqueId));
    const onClickMinusCount = () => {
        if (data.count > 1) {
            dispatch(decreaseCount(data.uniqueId));
        } else {
            dispatch(changeProductState(menuItem, data.uniqueId, false));
            dispatch(removeProduct(data.uniqueId));
        }
    };

    // const cartProduct = useSelector(createSelector(
    //     state => state.cart.selected,
    //     selected => selected.find(elem => elem.id === product.uniqueId)
    // ));
    // const onClickDropdown = value => value === product.selectedGift ? undefined : onSetGift(value);
    // const onClickButton = event => {
    //     const target = event.target;
    //     const button = target.className;
    //     if (product.prevButton === button) return;
    //     if (target.dataset.default) {
    //         onSetSize(product.sizes[0].weight, product.sizes[0].price, product.sizes[0].discount, false, button);
    //     } else {
    //         onSetSize(product.sizes[1].weight, product.sizes[1].price, product.sizes[1].discount, true, button);
    //     }
    // };
    // const onClickCheckbox = () => onSetSize(
    //     product.sizes[+(!product.checkbox)].weight,
    //     product.sizes[+(!product.checkbox)].price,
    //     product.sizes[+(!product.checkbox)].discount,
    //     !product.checkbox
    // );
    // const onClickOrder = () => cartProduct ? undefined : onAddProduct(product);
    // const onClickPlusCount = () => onIncreaseCount(product.uniqueId);
    // const onClickMinusCount = () => cartProduct.count > 1 ? onDecreaseCount(product.uniqueId) : onRemoveProduct(product.uniqueId);


    return (
        <section className={style.productPage}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.productPage__wrapper}>
                <article className={style.productPage__content}>
                    <div className={`${style.productPage__img} productPage__img`}>
                        <img src={data.images.smallImageUrl} alt="" />
                        <div className="product-tag__wrapper">
                            {data.tags.map(({ id, type, content }) => (
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
                        <h2>{data.title}</h2>
                        <div className={style.productPage__weight_block}>
                            <div className={style.productPage__weight}>{selectedSize.weight}</div>
                            {data.hasTwoSizes && (
                                <Swicher
                                    sizes={data.sizes}
                                    onClickButtonHandler={onClickButton}
                                    onClickCheckboxHandler={onClickCheckbox}
                                />
                            )}
                        </div>
                        <div className={style.productPage__description}>
                            {data.description.map((sentence, index) => <p key={index}>{sentence}</p>)}
                        </div>
                        <div className={style.productPage__footer}>
                            {data.hasGifts && (
                                <div className={`${style.productPage__gift} product-page__gift`}>
                                    <GiftDropdown
                                        list={data.gifts}
                                        value={selectedGift.content}
                                        callback={onClickDropdown}
                                    />
                                </div>
                            )}
                            <div className={style.productPage__price_block}>
                                <div className={style.productPage__price}>
                                    {data.hasDiscount && <span className={style.productPage__price_discount}>{selectedSize.discount} грн</span>}
                                    <span className={`${style.productPage__price_ordinary} ${data.hasDiscount ? style.width_discount : ''}`}>{selectedSize.price} грн</span>
                                </div>
                                <div className={style.productPage__order_btn}>
                                    <button
                                        className={classnames(
                                            'item-homeSlider__btn',
                                            'item-homeSlider__btn-mini',
                                        )}
                                        onClick={!data.isSelected ? onClickOrder : undefined}
                                    >{data.isSelected ? (
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
                            {data.hasBonuses && (
                                <div className={style.productPage__delivery}>
                                    {data.bonuses.map(({ id, type, content }) => (
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
                    {data.hasAdditions && (
                        <div className={style.productPage__additional_inner}>
                            <h3>Дополнения</h3>
                            <div className={style.productPage__additional_container}>
                                {data.additions.map((item, index) => (
                                    <AdditionItem
                                        key={index}
                                        productId={data.uniqueId}
                                        additionData={item}
                                        disabled={!data.isSelected}
                                    // changeAddition={onChangeAddition}
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
