import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const withBreadcrumbs = Component => {

    const HOC = withRouter(props => {

        const breadcrumbNameMap = {
            '/pizza': 'Пицца',
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
                {...props}
            />
        )
    });

    return HOC;
};

export default withBreadcrumbs
