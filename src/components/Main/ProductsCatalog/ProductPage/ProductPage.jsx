import React from 'react'

import withBreadcrumbs from './../../../HOC/withBreadcrumbs';

import style from './ProductPage.module.scss';


const ProductPage = ({ BreadcrumbsComponent, id }) => {
    return (
        <section className={style.productPage}>
            <BreadcrumbsComponent/>
        </section>
    )
}

export default withBreadcrumbs(ProductPage)
