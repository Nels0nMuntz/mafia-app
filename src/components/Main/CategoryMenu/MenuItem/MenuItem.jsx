import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeCurrentFastCategory } from '../../../../redux/catalog-reducer';

import style from './MenuItem.module.scss'


const MenuItem = ({ visibled, title, imageUrl, link, isActive }) => {

    const dispatch = useDispatch()
    const setDefaultFilter = () => dispatch(changeCurrentFastCategory('default'));

    return (
        <Link 
            to={`/menu-dostavki/${link}`}
            className={style.link}
            onClick={setDefaultFilter}
        >
            <div className={
                classnames(
                    style.menu_item,
                    isActive && style.active,
                    { [style.visibled]: visibled },
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
    link: PropTypes.string.isRequired,
    isActive: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
}

export default MenuItem
