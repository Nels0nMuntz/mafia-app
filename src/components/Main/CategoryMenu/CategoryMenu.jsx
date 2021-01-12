import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types';

import MenuItem from './MenuItem/MenuItem';
import withBreakpoints from './../../HOC/withBreakpoints';

import style from './CategoryMenu.module.scss'
import CustomScrollbar from './../../common/CustomScrollbar/CustomScrollbar';

const CategoryMenu = ({ categories, increaseMode, changeIncreaseMode, menuItem, queryMatches }) => {

    const isVisibiled = increaseMode || (queryMatches && queryMatches.lg); 

    return (
        <aside
            className={classnames(
                style.menu,
                { [style.increased]: increaseMode }
            )}
            onMouseEnter={changeIncreaseMode}
            onMouseLeave={changeIncreaseMode}
        >
            <ul className={style.menu_list}>
                <CustomScrollbar>
                    {categories.length && (
                        categories.map(({ id, content, imageUrl, link }) => (
                            <li
                                key={id}
                                className={style.menu_item}
                            >
                                <MenuItem
                                    title={content}
                                    imageUrl={imageUrl}
                                    visibled={isVisibiled}
                                    link={link}
                                    isActive={menuItem === link}
                                />
                            </li>
                        ))
                    )}
                </CustomScrollbar>
            </ul>
        </aside>
    );
};

CategoryMenu.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    increaseMode: PropTypes.bool.isRequired,
    changeIncreaseMode: PropTypes.func.isRequired,
    menuItem: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
};

export default withBreakpoints(CategoryMenu, {
    lg: '(max-width: 1020px)',
});
