import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import styled from 'styled-components'

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

        const breadcrumbNameMap = {
            '/menu-dostavki': 'Меню доставки',
            '/menu-dostavki/pizza': 'Пицца',
        };

        const pathSnippets = props.location.pathname.split('/').filter(i => i);
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

        return (
            <Component
                breadcrumbItems={breadcrumbItems}
                separator={<Separator/>}
                {...props}
            />
        )
    });

    return HOC;
};

export default withBreadcrumbs