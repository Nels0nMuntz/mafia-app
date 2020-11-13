import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './HeaderLeft.module.scss'
import HeaderDropdown from './../../libs-components/HeaderDropdown/HeaderDropdown';


const HeaderLeft = () => {

    const categories = useSelector(state => state.headerReducer.categories)
    
    return (
        <div className={style.header_left_wrapper}>
            <ul className={style.header_left_list}>
                <li>
                    <HeaderDropdown
                        title={categories.find(category => category.type === 'city').title}
                        list={categories.find(category => category.type === 'city').list}
                    />
                </li>
                <li>
                    <HeaderDropdown
                        title={categories.find(category => category.type === 'restaurants').title}
                        list={categories.find(category => category.type === 'restaurants').list}
                    />
                </li>
                <li>
                    <HeaderDropdown
                        title={categories.find(category => category.type === 'contacts').title}
                        list={categories.find(category => category.type === 'contacts').list}
                    />
                </li>
                <li>
                    <Link to='/'>
                        <div className={style.one_plus_one}>
                            Заберу сам 1+1
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HeaderLeft
