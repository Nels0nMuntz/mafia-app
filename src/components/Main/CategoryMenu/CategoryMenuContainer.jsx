import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryMenu from './CategoryMenu'
import { requestMenuCategories } from '../../../redux/menu-reducer';


const CategoryMenuContainer = React.memo(({ menuItem }) => {

    const [increaseMode, setIncreaseMode] = React.useState(false);
    const changeIncreaseMode = () => setIncreaseMode(!increaseMode);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.menu.categories);

    React.useEffect(() => {
        if(!!categories.length) return;
        dispatch(requestMenuCategories());
    }, []);

    return (
        <CategoryMenu
            categories={categories}
            increaseMode={increaseMode}
            changeIncreaseMode={changeIncreaseMode}
            menuItem={menuItem}
        />
    )
});

CategoryMenuContainer.propTypes = {
    menuItem: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
};

export default CategoryMenuContainer;
