import React from 'react'
import classnames from 'classnames'

import style from './CategoryMenu.module.scss'

import MenuItem from './MenuItem/MenuItem';
import { requestMenuCategories } from '../../../redux/menu-reducer';
import { useDispatch, useSelector } from 'react-redux';

const CategoryMenu = () => {

    const [increaseMode, setIncreaseMode] = React.useState(false);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.menu.categories)

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
            <ul>
                {categories.length && (
                    categories.map(({ id, content, imageUrl }) => (
                        <li 
                            key={id}
                            className={style.menu_item}
                        >
                            <MenuItem
                                title={content}
                                imageUrl={imageUrl}
                                visibled={increaseMode}
                            />
                        </li>
                    ))
                )}
                {/* <li>
                    <MenuItem
                        visibled={increaseMode}
                    />
                </li> */}
            </ul>
        </aside>
    );
};

export default CategoryMenu
