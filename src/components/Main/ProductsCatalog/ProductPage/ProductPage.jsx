import React from 'react'

import withBreadcrumbs from './../../../HOC/withBreadcrumbs';

import style from './ProductPage.module.scss';
import imgUrl from './../../../../assets/images/pizza-product.jpeg'


const ProductPage = ({ BreadcrumbsComponent, id }) => {
    return (
        <section className={style.productPage}>
            <div className={style.breadcrumbs_container}>
                <BreadcrumbsComponent />
            </div>
            <div className={style.productPage__inner}>
                <div className={style.productPage__img}>
                    <img src={imgUrl} alt="" />
                </div>
                <div className={style.productPage__info}>
                    <h2>Карибская</h2>
                    <div className={style.productPage__weight_block}>
                        <div className={style.productPage__weight}>
                            550 г
                        </div>
                        <div className={style.productPage__switcher}></div>
                    </div>
                    <div className={style.productPage__description}>
                        <p>
                            Атлантика: креветки, филе лосося, сыр пармезан, шпинат, томаты, сливки, чеснок
                        </p>
                        <p>
                            Американо: филе куриное sous-vide, колбаски охотничьи, пепперони, сыр моцарелла, кукуруза, болгарский перец, лук конфитюр, соус BBQ, соус маринара, горчица
                        </p>
                        <p>
                            Поло: филе куриное sous-vide, сыр моцарелла, ананас, болгарский перец, чеснок, соус маринара, соус ВВQ
                        </p>
                    </div>
                    <div className={style.productPage__price_block}>
                        <div className={style.productPage__price}>
                            <span className={style.productPage__price_discount}>189 грн</span>
                            <span className={`${style.productPage__price_ordinary} ${style.width_discount}`}>229 грн</span>
                        </div>
                        <div className={style.productPage__order_btn}>
                            <button>Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withBreadcrumbs(ProductPage)
