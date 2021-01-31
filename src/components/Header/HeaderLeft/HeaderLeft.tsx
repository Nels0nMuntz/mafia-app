import React from 'react'

import style from './HeaderLeft.module.scss'
import pinImgUrl from '../../../assets/images/pin.svg'
import phoneImgUrl from '../../../assets/images/phone.svg'

import HeaderDropdown from '../../common/HeaderDropdown/HeaderDropdown';

type Props = {
    categories: CategoryType[]
};

const HeaderLeft: React.FC<Props> = ({ categories }) => {

    return (
        <div className={style.header_left_wrapper}>
            <ul className={style.header_left_list}>
                <li>
                    <HeaderDropdown
                        title={categories.find(category => category.type === 'city')?.title}
                        list={categories.find(category => category.type === 'city')?.list}
                        iconUrl={pinImgUrl}
                    />
                </li>
                <li>
                    <HeaderDropdown
                        title={categories.find(category => category.type === 'restaurants')?.title}
                        list={categories.find(category => category.type === 'restaurants')?.list}
                    />
                </li>
                <li>
                    <HeaderDropdown
                        type={categories.find(category => category.type === 'contacts')?.type}
                        title={categories.find(category => category.type === 'contacts')?.title}
                        list={categories.find(category => category.type === 'contacts')?.list}
                        iconUrl={phoneImgUrl}
                    />
                </li>
                <li>
                    <div className={style.one_plus_one}>
                        Заберу сам 1+1
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default HeaderLeft;
