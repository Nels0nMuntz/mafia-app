import React from 'react'

import withBreadcrumbs from './../../../HOC/withBreadcrumbs';
import GiftDropdown from './../../../../libs-components/GiftDropdown/GiftDropdown';
import Swicher from './../../../../libs-components/Swicher/Swicher';

import style from './ProductPage.module.scss'
import imgUrl from './../../../../assets/images/pizza-product.jpeg'
import deliveyImgUrl from './../../../../assets/images/delivery-icon.png'
import addImgUrl from './../../../../assets/images/additional-pizza-product.jpeg'


const ProductPage = ({ BreadcrumbsComponent, id }) => {

    const list = ["Bud 0.75л", "Без подарка"];
    const onClickDropdown = value => console.log(value);

    return (
        <section className={style.productPage}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.productPage__wrapper}>
                <article className={style.productPage__content}>
                    <div className={style.productPage__img}>
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className={style.productPage__info}>
                        <h2>Карибская</h2>
                        <div className={style.productPage__weight_block}>
                            <div className={style.productPage__weight}>
                                550 г
                        </div>
                            <Swicher />
                        </div>
                        <div className={style.productPage__description}>
                            <p>
                                Атлантика: креветки, филе лосося, сыр пармезан, шпинат, томаты, сливки, чеснок
                        </p>
                            <p>
                                Американо: филе куриное sous-vide, колбаски охотничьи, пепперони, сыр моцарелла, кукуруза, болгарский перец, лук конфитюр, соус BBQ, соус маринара, горчица
                        </p>
                            <p>
                                Поло: филе куриное sous-vide, сыр моцарелла, ананас, болгарский перец, чеснок, соус маринара, соус ВВQ
                        </p>
                        </div>
                        <div className={style.productPage__footer}>
                            <div className={`${style.productPage__gift} product-page__gift`}>
                                <GiftDropdown
                                    list={list}
                                    value={list[0]}
                                    callback={onClickDropdown}
                                />
                            </div>
                            <div className={style.productPage__price_block}>
                                <div className={style.productPage__price}>
                                    <span className={style.productPage__price_discount}>189 грн</span>
                                    <span className={`${style.productPage__price_ordinary} ${style.width_discount}`}>229 грн</span>
                                </div>
                                <div className={style.productPage__order_btn}>
                                    <button>В корзину</button>
                                </div>
                            </div>
                            <div className={style.productPage__delivery}>
                                <div className={style.productPage__delivery_inner}>
                                    <span><img src={deliveyImgUrl} alt="" /></span>
                                    <span>Безкоштовна доставка при замовленні від 200 грн </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className={style.productPage__additional}>
                    <div className={style.productPage__additional_inner}>
                        <h3>Дополнения</h3>
                        <div className={style.productPage__additional_container}>
                            <div className={`${style.productPage__additional_item} ${style.item_additional}`}>
                                <div className={style.item_additional__info}>
                                    <div className={style.item_additional__image}>
                                        <img src={addImgUrl} alt="" />
                                    </div>
                                    <div className={style.item_additional__descr}>
                                        <h4>Добавка "Сырный бортик"</h4>
                                        <div className={style.item_additional__weight}>45 г</div>
                                        <div className={style.item_additional__price}>19 <span>грн</span></div>
                                    </div>
                                </div>
                                <button className={style.item_additional__btn}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.5" cy="9.5" r="9" stroke="#EEE9E3" />
                                        <line x1="9.5" y1="4" x2="9.5" y2="15" stroke="#EEE9E3" />
                                        <line x1="4" y1="9.5" x2="15" y2="9.5" stroke="#EEE9E3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withBreadcrumbs(ProductPage)
