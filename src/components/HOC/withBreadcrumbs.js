import React from 'react'
import { withRouter, Link, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb } from 'antd';
import styled from 'styled-components'

import {changeCurrentFastCategory} from './../../redux/catalog-reducer'

import './withBreakpoints.scss'


const Separator = styled.span`
    display: inline-block;
    width: 5px;
    height: 5px;
    border: 4px solid transparent;
    border-left-color: var(--gray-100);
`;

const withBreadcrumbs = Component => {

    const HOC = withRouter(props => {

        const dispatch = useDispatch()
        const match = useRouteMatch('/menu-dostavki/:menuItem/:product?/:id?');
        const menuItem = useSelector(state => state.catalog.prods[match.params.menuItem]);

        const fastCategory = new URL(window.location.href).searchParams.get('fast') ?? '';
        const onClickCartegory = event => {
            const newFastCategory = event.target.textContent === fastCategory ? fastCategory : 'default'
            dispatch(changeCurrentFastCategory(newFastCategory));
        };

        const breadcrumbNameMap = {
            '/menu-dostavki': 'Меню доставки',
            [`/menu-dostavki/${match.params.menuItem}`]: menuItem ? menuItem.title : '',
            [`/menu-dostavki/${match.params.menuItem}/product/${match.params.id}`]: `${fastCategory}`,
        };

        const pathSnippets = props.location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                breadcrumbNameMap[url] && (
                    <Breadcrumb.Item key={url}>
                        {props.location.search ? (
                            <Link to={`/menu-dostavki/${match.params.menuItem}`} onClick={onClickCartegory}>{breadcrumbNameMap[url]}</Link>
                        ) : (
                                <Link to={url}>{breadcrumbNameMap[url]}</Link>
                            )}
                    </Breadcrumb.Item>
                )
            );
        });

        const breadcrumbItems = [
            <Breadcrumb.Item key="home">
                <Link to="/">Главная</Link>
            </Breadcrumb.Item>,
        ].concat(extraBreadcrumbItems);

        const BreadcrumbsComponent = () => (
            <div className="breadcrumbs_wrapper">
                <div className="breadcrumbs_container">
                    <Breadcrumb
                        separator={<Separator />}
                    >
                        {breadcrumbItems}
                    </Breadcrumb>
                </div>
            </div>
        );

        return (
            <Component
                BreadcrumbsComponent={BreadcrumbsComponent}
                {...props}
            />
        )
    });

    return HOC;
};

export default withBreadcrumbs
