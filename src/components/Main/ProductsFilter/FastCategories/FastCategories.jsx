import React from 'react'

import style from './FastCategories.module.scss'

const FastCategories = ({fastCategories, currentFastCategory, callback}) => {

    const onClickButton = event => {
        const category = event.target.dataset.category;
        callback(category);
    };

    return (
        <ul className={style.fast_categories}>
                {fastCategories.map(({id, content, type}) => (
                    <li                    
                        key={id}
                    >
                        <button
                            data-category={type}
                            onClick={onClickButton}
                            className={currentFastCategory === type ? style.active : ''}
                        >
                            {content}
                        </button>
                        <span></span>
                    </li>
                ))}
        </ul>
    );
};

export default FastCategories;
