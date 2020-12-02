import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames'

import { requestCategories } from '../../redux/header-reducer';
import Hamburger from './Hamburger/Hamburger'

import style from './Header.module.scss'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderRight from './HeaderRight/HeaderRight';
import { getScrollbar } from './../../scrollbar/scrollbar';


const Header = () => {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.header.isMenuOpen);
    const node = React.useRef();

    //s width scrollbar
    if(node && node.current){
        isMenuOpen ? getScrollbar(node.current) : node.current.style.paddingRight = '0'
    }

    useEffect(() => {
        dispatch(requestCategories());
    }, [isMenuOpen, node]);

    return (
        <header
            className={classnames(
                'header',
                style.header,
            )}
            ref={node}
        >
            <div className={style.header_wrapper}>
                <Hamburger />
                <div className={style.header_inner}>
                    <HeaderLeft />
                    <HeaderLogo />
                    <HeaderRight />
                </div>
            </div>
        </header>
    );
};

export default Header;
