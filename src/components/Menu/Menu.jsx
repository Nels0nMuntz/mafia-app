import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'

import { toggleMenuState } from '../../redux/header-reducer'

import style from './Menu.module.scss'


const Menu = () => {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.header.isMenuOpen);
    const node = React.useRef();

    React.useEffect(() => {

        const hendler = event => { 
            if(!node || node.current.contains(event.target)) return;
            if(isMenuOpen){
                console.log('close');
                dispatch(toggleMenuState());
            }
        };

        document.body.addEventListener('mousedown', hendler);
        return () => { document.body.removeEventListener('mousedown', hendler); }
    }, [ node, isMenuOpen ])

    return (
        <div
            className={classnames(
                style.wrapper,
                isMenuOpen && style.active
            )}
            ref={node}
        >
            <nav>
                <ul className={style.menu_list}>
                    <li>
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
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
