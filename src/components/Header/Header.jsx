import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import classnames from 'classnames'

import { requestCategories } from '../../redux/header-reducer';
import Hamburger from './Hamburger/Hamburger'

import style from './Header.module.scss'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderLogoWithBreakpoints from './HeaderLogo/HeaderLogo';
import HeaderRightWithBreakpoints from './HeaderRight/HeaderRight';


const Header = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestCategories())
    }, [])

    return (
        <header className={classnames(
            'header',
            style.header,
        )}>
            <div className={style.header_wrapper}>
                <Hamburger />
                <div className={style.header_inner}>
                    <HeaderLeft />
                    <HeaderLogoWithBreakpoints />
                    <HeaderRightWithBreakpoints />
                </div>
            </div>
        </header>
    )
}

export default Header
