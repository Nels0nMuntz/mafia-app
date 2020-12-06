import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types';

import style from './MenuItem.module.scss'
// import imgUrl from '../../../../assets/images/menu-icon.svg'


const MenuItem = ({ visibled, title, imageUrl, link }) => {
    return (
        <Link to={`/menu-dostavki/${link}`}
            className={style.link}
        >
            <div className={
                classnames(
                    style.menu_item,
                    { [style.visibled]: visibled }
                )
            }>
                <img src={imageUrl} alt="menu" />
                <span>{title}</span>
            </div>
        </Link>
    )
};

MenuItem.propTypes= {
    visibled: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

export default MenuItem
