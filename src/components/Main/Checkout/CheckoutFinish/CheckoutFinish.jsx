import React from 'react'
import { Link } from 'react-router-dom'

import style from './CheckoutFinish.module.scss'

const CheckoutFinish = () => {
    return (
        <div className={style.container}>
            <h2>Благодарим за выбор!</h2>
            <h2>Ваш заказ уже принят в обработку</h2>
            <Link to='/'>{'Вернуться на главную >>'}</Link>
        </div>
    )
}

export default CheckoutFinish
