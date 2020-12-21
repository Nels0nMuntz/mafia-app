import React from 'react'
import { Redirect } from 'react-router-dom';

import CheckoutItem from './CheckoutItem';

import style from './Checkout.module.scss'
import imgUrl from './../../../assets/images/pizza-product.jpeg'


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
                <section className={style.checkout__section}>
                    <div className={style.checkout_confirm__header}>
                        <p>Номер телефона</p>
                        <form>
                            <input type="number"/>
                            <button type="submit">Продолжить с СМС-кодом для авторизации</button>
                        </form>
                        <p>и получить бонусы на карту</p>
                    </div>
                    <div className={style.checkout_confirm__footer}>

                    </div>
                </section>
            </div>
        </div>
    )
};

export default Checkout;
