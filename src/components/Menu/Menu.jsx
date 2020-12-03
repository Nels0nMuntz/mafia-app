import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'

import { requestMenu, toggleMenuState } from '../../redux/header-reducer'

import style from './Menu.module.scss'


const Menu = () => {

    const dispatch = useDispatch();
    const menu = useSelector(state => state.header.menu);
    const isMenuOpen = useSelector(state => state.header.isMenuOpen);
    const nav = React.useRef();

    React.useEffect(() => {

        dispatch(requestMenu());

        const hendler = event => {
            if (!nav || nav.current.contains(event.target)) return;
            if (isMenuOpen) {
                dispatch(toggleMenuState());
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0';
            }
        };

        document.body.addEventListener('mousedown', hendler);
        return () => { document.body.removeEventListener('mousedown', hendler); }
    }, [isMenuOpen])

    return (
        <div
            className={classnames(
                style.wrapper,
                isMenuOpen && style.active
            )}
        >
            <nav ref={nav}>
                <ul className={style.menu_list}>
                    {menu.length && menu.map(({ id, item, submenu }) => (
                        <li key={`${item}_${id}`}>
                            <div className={style.menu_item}>
                                <span>{item}</span>
                            </div>
                            <ul className={style.submenu_item}>
                                {submenu.map((elem, index) => (
                                    <li key={`${elem}_${index}`}>
                                        <span>{elem}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    {/* <li>
                        <div className={style.menu_item}>
                            <span>Меню</span>
                        </div>
                        <ul className={style.submenu_item}>
                            <li>
                                <span>Пицца</span>
                            </li>
                            <li>
                                <span>Суши и сеты</span>
                            </li>
                            <li>
                                <span>Продукты</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={style.menu_item}>
                            <span>Рестораны Харькова</span>
                        </div>
                        <ul className={style.submenu_item}>
                            <li>
                                <span>Меню ресторана</span>
                            </li>
                            <li>
                                <span>Бизнес ланчи</span>
                            </li>
                            <li>
                                <span>Звтраки</span>
                            </li>
                            <li>
                                <span>Новости</span>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
};

export default Menu;
