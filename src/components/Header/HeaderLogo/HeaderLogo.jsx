import React from 'react'
import { Link } from 'react-router-dom'

import withBreakpoints from './../../HOC/withBreakpoints';

import style from './HeaderLogo.module.scss'
import logoImg from '../../../assets/images/logo.svg'
import logoMiniImg from '../../../assets/images/logo-mini.svg'



const HeaderLogo = ({ queryMatches }) => {

    return (
        <div className={style.logo_wrapper}>
            <Link to="/">
                {queryMatches && (
                    <>
                        {
                            queryMatches.md ? (
                                <img src={logoMiniImg} alt="Logo" />
                            ) : (
                                    <img src={logoImg} alt="Logo" />
                            )
                        }
                    </>
                )}
            </Link>
        </div>
    )
};

export default withBreakpoints(HeaderLogo, {
    md: '(max-width: 720px)',
});