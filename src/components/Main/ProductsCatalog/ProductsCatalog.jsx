import React from 'react';

import ProductCard from './ProductCard/ProductCard';
import { requestPizzaCatalog } from '../../../redux/catalog-reducer';

import style from './ProductsCatalog.module.scss'
import { useDispatch, useSelector } from 'react-redux';


const ProductsCatalog = () => {

    const dispatch = useDispatch();
    const pizzaCatalog = useSelector(state => state.catalog.pizza);
    React.useEffect(() => {
        // dispatch(requestPizzaCatalog());
    }, []);
    const children = React.useMemo(() => (pizzaCatalog.map(item => ( <ProductCard key={`${item.id}_${item.title}`} cardData={item} /> )) ), [pizzaCatalog]);

    return (
        <section className={style.products_catalog}>
            <div className={style.products_breadcrumbs}>
                <div className={style.breadcrumbs_container}>
                    <span>breadcrumbs</span>
                </div>
            </div>
            <div className={style.products_container}>
                {pizzaCatalog.length && children}
            </div>
        </section>
    );
};

export default ProductsCatalog;
