import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { toggleMenuState } from '../../../redux/header-reducer'

import style from './Hamburger.module.scss'
import { getScrollbar } from './../../../scripts/scrollbar/scrollbar';


const Hamburger = () => {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.header.isMenuOpen);
    let isPermitted = true;
    
    const onClickBurger = () => {
        if(!isMenuOpen && isPermitted){
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
