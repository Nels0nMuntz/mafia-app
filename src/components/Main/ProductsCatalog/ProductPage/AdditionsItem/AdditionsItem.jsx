import React from 'react'
import classnames from 'classnames'

import style from './AdditionsItem.module.scss'


const AdditionItem = ({ additionData, disabled, changeAddition }) => {

    const { id, title, weight, price, imgUrl, isSelected } = additionData;

    const onClickButton = () => disabled ? undefined : changeAddition(id);

    return (
        <div className={`${style.productPage__additional_item} ${style.item_additional}`} key={id}>
            <div className={style.item_additional__info}>
                <div className={style.item_additional__image}>
                    <img src={imgUrl} alt="" />
                </div>
                <div className={style.item_additional__descr}>
                    <h4>{title}</h4>
                    <div className={style.item_additional__weight}>{weight}</div>
                    <div className={style.item_additional__price}>{price} <span>грн</span></div>
                </div>
            </div>
            <button
                className={classnames(
                    style.item_additional__btn,
                    disabled && style.disabled
                )}
                onClick={onClickButton}
            >
                {isSelected
                    ? (
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.5" cy="9.5" r="9" stroke="#EEE9E3" />
                            <line x1="4" y1="9.5" x2="15" y2="9.5" stroke="#EEE9E3" />
                        </svg>
                    ) : (
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.5" cy="9.5" r="9" stroke="#EEE9E3" />
                            <line x1="9.5" y1="4" x2="9.5" y2="15" stroke="#EEE9E3" />
                            <line x1="4" y1="9.5" x2="15" y2="9.5" stroke="#EEE9E3" />
                        </svg>
                    )}
            </button>
        </div >
    )
}

export default AdditionItem
