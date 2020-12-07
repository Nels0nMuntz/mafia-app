import React from 'react'

import style from './Preloader.module.scss'
import imgUrl from './../../assets/images/logo-dark.svg'

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.bg_wrapper}>
                <div className={style.preloader_inner}>
                    <div className={style.preloader_img}>
                        <img src={imgUrl} alt=""/>
                    </div>
                    <div className={style.preloader_animation}>
                        <div className={style.preloader_dot}></div>
                        <div className={style.preloader_dot}></div>
                        <div className={style.preloader_dot}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
