import React from 'react'

import style from './HeaderCategory.module.scss'

const HeaderCategory = () => {
    return (
        <div className={style.category_wrapper}>
            <div className={style.category}>
                <p className={style.category_name}>Харьков</p>
                <div className={style.category_popup}>
                    <div className={style.popup_overlay}>

                    </div>
                    <div className={style.popup_list}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCategory
