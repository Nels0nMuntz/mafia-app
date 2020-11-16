import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import style from './MenuItem.module.scss'
// import imgUrl from '../../../../assets/images/menu-icon.svg'


const MenuItem = ({ visibled, title, imageUrl }) => {
    return (
        <Link
            className={style.link}
        >
            <div className={
                classnames(
                    style.menu_item,
                    {[style.visibled]: visibled}
                )
            }>
                <img src={imageUrl} alt="menu" />
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default MenuItem
