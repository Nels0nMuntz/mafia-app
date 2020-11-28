import React from 'react'

import style from './Footer.module.scss'
import logoUrl from './../../assets/images/logo.svg'
import facebookUrl from './../../assets/images/facebook-logo.svg'


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__left}>
                <div className={style.footer__logo_copy}>
                    <div className={style.footer__logo}>
                        <img src={logoUrl} alt="logo" />
                    </div>
                    <div className={style.footer__copy_left}>
                        <p>© 2002 - 2020 MAFIA</p>
                        <p>Все права защищены.</p>
                    </div>
                </div>
                <nav className={style.footer__nav}>
                    <div className={style.footer__column}>
                        <ul>
                            <li><span>Меню доставки</span></li>
                            <li><span>Рестораны Харькова</span></li>
                            <li><span>Меню ресторана</span></li>
                        </ul>
                    </div>
                    <div className={style.footer__column}>
                        <ul>
                            <li><span>Новости</span></li>
                            <li><span>Бонусная программа</span></li>
                            <li><span>Организация праздников</span></li>
                        </ul>
                    </div>
                    <div className={style.footer__column}>
                        <ul>
                            <li><span>Франчайзинг</span></li>
                            <li><span>Вакансии</span></li>
                            <li><span>Договор </span></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={style.footer__right}>
                <div className={style.footer__social}>
                    <span>
                        <img src={facebookUrl} alt="fb" />
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
