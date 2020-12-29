import React from 'react'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

import style from './CheckoutWarnings.module.scss'
import './CheckoutWarning.scss'

const CheckoutWarnings = ({ errors, isVisible }) => {

    return (
        <div className={style.warnings__wrapper}>
            <ul className={style.warnings__list}>
                <TransitionGroup component={null}>
                    {isVisible && errors.map((item, i) => (
                        <CSSTransition
                            key={i}
                            classNames="errorItem"
                            timeout={1000}         
                        >
                            <li className={style.warnings__item} style={{transitionDelay: 200 * i + 'ms'}} >
                                <div>!</div><div>{item}</div>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default CheckoutWarnings
