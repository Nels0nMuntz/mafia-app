import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CategoryMenu from './CategoryMenu'
import { requestMenuCategories } from '../../../redux/menu-reducer';


const CategoryMenuContainer = React.memo(() => {

    const [increaseMode, setIncreaseMode] = React.useState(false);
    const changeIncreaseMode = () => setIncreaseMode(!increaseMode);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.menu.categories);

    React.useEffect(() => {
        dispatch(requestMenuCategories());
    }, []);

    return (
        <CategoryMenu
            categories={categories}
            increaseMode={increaseMode}
            changeIncreaseMode={changeIncreaseMode}
        />
    )
});

export default CategoryMenuContainer;
