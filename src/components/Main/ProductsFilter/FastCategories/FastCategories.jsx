import React from 'react'

import style from './FastCategories.module.scss'

const FastCategories = ({fastCategories, callback}) => {

    // const onClickButton = event => callback(event.target.dataset.category);

    return (
        <ul className={style.fast_categories}>
            <li>
                {fastCategories.map(({id, name, value}) => (
                    <button
                        key={id}
                        data-category={value}
                        // onClick={onClickButton}
                    >{name}</button>
                ))}
            </li>
        </ul>
    );
};

export default FastCategories;
