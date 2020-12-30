import React from 'react'
import { Redirect, Route, Link } from 'react-router-dom';

import CheckoutItem from './CheckoutItem';
import CheckoutSMSAuth from './CheckoutSMSAuth/CheckoutSMSAuth';

import style from './Checkout.module.scss'
import benefits1Img from './../../../assets/images/checkout/benefits1.svg'
import benefits2Img from './../../../assets/images/checkout/benefits2.svg'
import benefits3Img from './../../../assets/images/checkout/benefits3.svg'
import CheckoutFormContainer from './CheckoutForm/CheckoutFormContainer';


const Checkout = ({ list, onDecreaseCount, onIncreaseCount, onRemoveProduct }) => {

    const sumPrice = list.reduce((prev, { count, price }) => prev + count * price, 0);
    const sumCount = list.reduce((prev, curr) => prev + curr.count, 0);

    if (!list.length) return <Redirect to='/' />
    return (
        <div className={style.checkout__wrapper}>
            <div className={style.checkout__container}>
                <h1 className={style.checkout__title}>Оформление заказа</h1>
                <section className={style.checkout__section}>
                    <div className={style.checkout_list__header}>
                        <div className={style.checkout_list__row}>
                            <div className={style.checkout_list__row_wrapper}>
                                <div className={style.checkout_list__title}>Название</div>
                                <div className={style.checkout_list__price}>Цена</div>
                                <div className={style.checkout_list__count}>Количество</div>
                                <div className={style.checkout_list__sum}>Всего</div>
                                <div className={style.checkout_list__close}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.checkout_list__body}>
                        {list.map(({ id, title, imageUrl, gift, count, price }) => (
                            <CheckoutItem
                                key={id}
                                id={id}
                                title={title}
                                imageUrl={imageUrl}
                                gift={gift}
                                count={count}
                                price={price}
                                onDecreaseCount={onDecreaseCount}
                                onIncreaseCount={onIncreaseCount}
                                onRemoveProduct={onRemoveProduct}
                            />
                        ))}
                    </div>
                    <div className={style.checkout_list__footer}>
                        <div className={style.checkout_list__row}>
                            <div className={style.footer_sum}>
                                <p>В корзине {sumCount} товаров</p>
                                <p><span>Сумма за все товары</span><span>{sumPrice} грн</span></p>
                            </div>
                            <p className={style.footer_row}>* На товары, помеченные (*), скидка при самовывозе не распространяется.</p>
                        </div>
                    </div>
                </section>
                <Route exact path="/checkout">
                    <section className={style.checkout__section}>
                        <div className={style.checkout_confirm}>
                            <div className={style.checkout_confirm__header}>
                                <div className={style.checkout_confirm__row}>
                                    <CheckoutSMSAuth />
                                    <ul className={style.checkout_benefits}>
                                        <li>
                                            <img src={benefits1Img} alt="" />
                                            <p><span>Сразу в ресторан</span>, без подтверждения оператора</p>
                                        </li>
                                        <li>
                                            <img src={benefits2Img} alt="" />
                                            <p><span>Не нужно вводить адрес</span>, Если вы уже ранее заказывали </p>
                                        </li>
                                        <li>
                                            <img src={benefits3Img} alt="" />
                                            <small>Если вы уже ранее заказывали - <span>на 78% быстрее</span></small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={style.checkout_confirm__footer}>
                                <div className={style.checkout_confirm__row}>
                                    <Link to='/checkout/without-auth'>
                                        <button>Продолжить без СМС авторизации</button>
                                    </Link>
                                    <span>Бонусы не будут начислены</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </Route>
                <Route path="/checkout/without-auth">
                    <div className={style.checkout__tab}>
                        <div className={style.tab__panes}>
                            <div className={`${style.tab__pane} ${style.active}`}>
                                <div className={style.pane__text}>
                                    <p className={style.pane__title}>Доставка курьером</p>
                                    <p className={style.pane__subtitle}>Бесплатно</p>
                                </div>
                                <div className={style.pane__price}>
                                    359 грн
                                </div>
                            </div>
                            <div className={style.tab__pane}>
                                <div className={style.pane__text}>
                                    <p className={style.pane__title}>Забрать самому. Внимание !!! Нужно ставить отметку Перезвоните мне ...</p>
                                    <p className={style.pane__subtitle}>Со скидкой 20%, кроме (*)</p>
                                </div>
                                <div className={style.pane__price}>
                                    359 грн
                                </div>
                            </div>
                        </div>
                        <div className={style.line}></div>
                        <CheckoutFormContainer />
                    </div>
                </Route>
            </div>
        </div>
    )
};

export default Checkout;
