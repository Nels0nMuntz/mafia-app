import React from 'react'
import classnames from 'classnames'

import MenuItem from './MenuItem/MenuItem';
import { requestMenuCategories } from '../../../redux/menu-reducer';
import { useDispatch, useSelector } from 'react-redux';
import withBreakpoints from './../../HOC/withBreakpoints';

import style from './CategoryMenu.module.scss'

const CategoryMenu = ({ queryMatches }) => {

    const [increaseMode, setIncreaseMode] = React.useState(false);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.menu.categories);

    let isVisibiled = increaseMode || (queryMatches && queryMatches.lg)

    React.useEffect(() => {
        dispatch(requestMenuCategories());
    }, [])

    const changeIncreaseMode = () => setIncreaseMode(!increaseMode);

    return (
        <aside
            className={classnames(
                style.menu,
                { [style.increased]: increaseMode }
            )}
            onMouseOver={changeIncreaseMode}
            onMouseOut={changeIncreaseMode}
        >
            <ul className={style.menu_list}>
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
                            />
                        </li>
                    ))
                )}
            </ul>
        </aside>
    );
};

export default withBreakpoints(CategoryMenu, {
    lg: '(max-width: 1020px)',
});
