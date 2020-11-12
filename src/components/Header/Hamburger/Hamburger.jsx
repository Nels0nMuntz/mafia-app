import React from 'react'
import classnames from 'classnames'

import style from './Hamburger.module.scss'


const Hamburger = () => {

    return (
        <div className={style.hamburger}>
            <input 
                className={classnames(
                    style.burger, 
                    style.menu_3
                )}
                type="checkbox" 
                id="burger"
            />
            <label htmlFor="burger">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </div>
    )
}

export default Hamburger
