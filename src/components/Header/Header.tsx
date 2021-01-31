import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames'

import { requestCategories } from '../../redux/header-reducer';
import Hamburger from './Hamburger/Hamburger'
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderRightContainer from './HeaderRight/HeaderRightContainer';
import { RootStateType } from '../../redux/store';

import style from './Header.module.scss'


const Header: React.FC = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state: RootStateType) => state.header.categories);
    useEffect(() => { dispatch(requestCategories()); }, []);

    return (
        <header
            className={classnames(
                'header',
                style.header,
            )}
        >
            <div className={style.header_wrapper}>
                <Hamburger />
                <div className={style.header_inner}>
                    <HeaderLeft
                        categories={categories}
                    />
                    <HeaderLogo />
                    <HeaderRightContainer
                        categories={categories}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
