import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { toggleMenuState } from '../../../redux/header-reducer'
import { getScrollbar } from '../../../scripts/scrollbar/scrollbar';
import { RootStateType } from '../../../redux/store'

import style from './Hamburger.module.scss'


const Hamburger: React.FC = () => {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state: RootStateType) => state.header.isMenuOpen);
    let isPermitted = true;

    const onClickBurger = () => {
        if (!isMenuOpen && isPermitted) {
            dispatch(toggleMenuState(true));
            getScrollbar(document.body);
            document.body.style.overflow = 'hidden';
            isPermitted = false;
        }
    };


    return (
        <div className={style.hamburger}>
            <div
                className={classnames(
                    style.burger_wrapper,
                    isMenuOpen && style.active
                )}
                onClick={onClickBurger}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Hamburger
