import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import ProductCard from './ProductCard/ProductCard';
import { requestPizzaCatalog } from '../../../redux/catalog-reducer';

import style from './ProductsCatalog.module.scss'


const ProductsCatalog = withRouter((props) => {

    const breadcrumbNameMap = {
        '/pizza': 'Пицца',
    };

    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Главная</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    const dispatch = useDispatch();
    const pizzaCatalog = useSelector(state => state.catalog.pizza);
    React.useEffect(() => {
        dispatch(requestPizzaCatalog());
    }, []);
    const children = () => (pizzaCatalog.map(item => (<ProductCard key={`${item.id}_${item.title}`} cardData={item} />)));
    // const children = React.useMemo(() => (pizzaCatalog.map(item => ( <ProductCard key={`${item.id}_${item.title}`} cardData={item} /> )) ), [pizzaCatalog]);

    return (
        <section className={style.products_catalog}>
            <div className={style.products_breadcrumbs}>
                <div className={style.breadcrumbs_container}>
                    <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                </div>
            </div>
            <div className={style.products_container}>
                {pizzaCatalog.length && children()}
            </div>
        </section>
    );
});

export default ProductsCatalog;
