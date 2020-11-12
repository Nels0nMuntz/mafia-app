import React from 'react'
import { Link } from 'react-router-dom'

import style from './HeaderLogo.module.scss'
import logoImg from '../../../assets/images/logo.svg'

const HeaderLogo = () => {
    return (
        <div className={style.logo_wrapper}>
            <Link>
                <img src={logoImg} alt="Logo"/>
            </Link>
        </div>
    )
}

export default HeaderLogo
