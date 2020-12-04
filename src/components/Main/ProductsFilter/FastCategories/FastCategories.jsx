import React from 'react'

import style from './FastCategories.module.scss'

const FastCategories = ({fastCategories, callback}) => {

    const [activeCategory, setActiveCategory] = React.useState('default')

    const onClickButton = event => {
        const category = event.target.dataset.category;
        callback(category);
        setActiveCategory(category);
    };

    return (
        <ul className={style.fast_categories}>
                {fastCategories.map(({id, name, value}) => (
                    <li>
                        <button
                            key={id}
                            data-category={value}
                            onClick={onClickButton}
                            className={activeCategory === value ? style.active : ''}
                            >{name}
                        </button>
                        <span></span>
                    </li>
                ))}
        </ul>
    );
};

export default FastCategories;
