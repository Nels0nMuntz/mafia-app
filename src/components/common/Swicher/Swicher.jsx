import React from 'react'
import classnames from 'classnames'

import './Swicher.scss'

const Swicher = ({ sizes, onClickButtonHandler, onClickCheckboxHandler }) => {

    const onClickButton = event => onClickButtonHandler(event);
    const onClickCheckbox = () => onClickCheckboxHandler();

    return (
        <div className="item-homeSlider__swicher swicher-homeSlider">
            <span
                data-size-id={sizes[0].id}
                onClick={onClickButton}
            >Средняя</span>
            <div
                data-checkbox
                className={classnames(
                    "swicher-homeSlider__checkbox",
                    !sizes[0].isSelected && 'checked'
                )}
                onClick={onClickCheckbox}
            >
                <span />
            </div>
            <span
                data-size-id={sizes[1].id}
                onClick={onClickButton}
            >Большая</span>
        </div>
    )
}

export default Swicher
