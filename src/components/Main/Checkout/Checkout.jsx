import React from 'react'

import style from './Checkout.module.scss'


const Checkout = () => {
    return (
        <div className={style.checkout__wrapper}>
            <div className={style.checkout__container}>
                <h1 className={style.checkout__title}>Оформление заказа</h1>
                <div className={style.checkout_list__wrapper}>
                    <div className={style.checkout_list__header}>

                    </div>
                    <div className={style.checkout_list__body}>

                    </div>
                    <div className={style.checkout_list__footer}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
