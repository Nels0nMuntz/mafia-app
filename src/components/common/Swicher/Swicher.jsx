import React from 'react'
import classnames from 'classnames'

import './Swicher.scss'

const Swicher = ({onClickButtonHandler, onClickCheckboxHandler, isChecked}) => {

    const onClickButton = event => onClickButtonHandler(event);
    const onClickCheckbox = () => onClickCheckboxHandler();

    return (
        <div className="item-homeSlider__swicher swicher-homeSlider">
            <span
                className="size-btn-1"
                data-default
                onClick={onClickButton}
            >Средняя</span>
            <div
                data-checkbox
                className={classnames(
                    "swicher-homeSlider__checkbox",
                    isChecked && 'checked'
                )}
                onClick={onClickCheckbox}
            >
                <span />
            </div>
            <span
                className="size-btn-2"
                onClick={onClickButton}
            >Большая</span>
        </div>
    )
}

export default Swicher
