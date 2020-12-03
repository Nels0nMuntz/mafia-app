import React from 'react'

import style from './FastCategories.module.scss'

const FastCategories = () => {

    const buttonNames = [
        'Все',
        'Метровая пицца',
        'Круглая пицца'
    ]

    return (
        <ul className={style.fast_categories}>
            <li>
                {buttonNames.map((name, index) => (
                    <button
                        key={index}
                    >{name}</button>
                ))}
            </li>
        </ul>
    )
}

export default FastCategories
