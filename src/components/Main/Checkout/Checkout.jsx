import React from 'react'
import classnames from 'classnames'
import { Redirect, Route, Link } from 'react-router-dom';

import CheckoutItem from './CheckoutItem';
import CheckoutSMSAuth from './CheckoutSMSAuth/CheckoutSMSAuth';
import CheckoutFormContainer from './CheckoutForm/CheckoutFormContainer';

import style from './Checkout.module.scss'
import benefits1Img from './../../../assets/images/checkout/benefits1.svg'
import benefits2Img from './../../../assets/images/checkout/benefits2.svg'
import benefits3Img from './../../../assets/images/checkout/benefits3.svg'


const Checkout = ({ list, totalPrice, totalCount, deliveryPrice, onDecreaseCount, onIncreaseCount, onRemoveProduct }) => {

    if (!list.length) return <Redirect to='/' />
    return (
        <div className={style.checkout__wrapper}>
            <div className={style.checkout__container}>
                <Route path="/checkout">
                    <h1 className={style.checkout__title}>Оформление заказа</h1>
                    <section className={style.checkout__section}>
                        <div className={style.checkout_list__header}>
                            <div className={style.checkout_list__row}>
                                <div className={style.checkout_list__row_wrapper}>
                                    <div className={style.checkout_list__title}>Название</div>
                                    <div className={style.checkout_list__price}>Цена</div>
                                    <div className={style.checkout_list__count}>Количество</div>
                                    <div className={style.checkout_list__sum}>Всего</div>
                                    <div className={style.checkout_list__close}></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.checkout_list__body}>
                            {list.map(({ uniqueId, title, images, sizes, gifts, count, hasTwoSizes, additions }) => {
                                const selectedSize = sizes.find(item => item.isSelected);
                                const selectedGift = gifts.find(item => item.isSelected) || '';
                                return (
                                    <CheckoutItem
                                        key={uniqueId}
                                        id={uniqueId}
                                        title={title}
                                        imageUrl={images.smallImageUrl}
                                        gift={selectedGift.content}
                                        count={count}
                                        price={selectedSize.price}
                                        sizeValue={hasTwoSizes ? selectedSize.value : ''}
                                        additions={additions}
                                        onDecreaseCount={onDecreaseCount}
                                        onIncreaseCount={onIncreaseCount}
                                        onRemoveProduct={onRemoveProduct}
                                    />
                                )
                            })}
                        </div>
                        <div className={style.checkout_list__footer}>
                            <div className={style.checkout_list__row}>
                                <div className={style.footer_sum}>
                                    <p>В корзине {totalCount} товаров</p>
                                    <p><span>Сумма за все товары</span><span>{totalPrice} грн</span></p>
                                </div>
                                <p className={style.footer_row}>* На товары, помеченные (*), скидка при самовывозе не распространяется.</p>
                            </div>
                        </div>
                    </section>
                    <Route exact path="/checkout">
                        <section className={style.checkout__section}>
                            <div className={style.checkout_confirm}>
                                <div className={style.checkout_confirm__header}>
                                    <div className={style.checkout_confirm__row}>
                                        <CheckoutSMSAuth />
                                        <ul className={style.checkout_benefits}>
                                            <li>
                                                <img src={benefits1Img} alt="" />
                                                <p><span>Сразу в ресторан</span>, без подтверждения оператора</p>
                                            </li>
                                            <li>
                                                <img src={benefits2Img} alt="" />
                                                <p><span>Не нужно вводить адрес</span>, Если вы уже ранее заказывали </p>
                                            </li>
                                            <li>
                                                <img src={benefits3Img} alt="" />
                                                <small>Если вы уже ранее заказывали - <span>на 78% быстрее</span></small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={style.checkout_confirm__footer}>
                                    <div className={style.checkout_confirm__row}>
                                        <Link to='/checkout/without-auth'>
                                            <button>Продолжить без СМС авторизации</button>
                                        </Link>
                                        <span>Бонусы не будут начислены</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Route>
                    <Route path="/checkout/without-auth">
                        <CheckoutTabs
                            totalPrice={totalPrice}
                            deliveryPrice={deliveryPrice}
                        />
                    </Route>
                </Route>
            </div>
        </div>
    )
};
export default Checkout;


export const CheckoutTabs = ({ totalPrice, deliveryPrice }) => {

    const [deliveryType, setDeliveryType] = React.useState('courier');

    const changeDeliveryType = event => {
        const target = event.target.closest('.tab__pane');
        setDeliveryType(target.dataset.deliveryType)
    };

    return (
        <div className={style.checkout__tab}>
            <div className={style.tab__panes}>
                <div
                    className={classnames(
                        "tab__pane",
                        style.tab__pane,
                        deliveryType === 'courier' && style.active
                    )}
                    onClick={changeDeliveryType}
                    data-delivery-type="courier"
                >
                    <div className={style.pane__text}>
                        <p className={style.pane__title}>Доставка курьером</p>
                        <p className={style.pane__subtitle}>{deliveryPrice ? `${deliveryPrice} грн` : 'Бесплатно'}</p>
                    </div>
                    <div className={style.pane__price}>{totalPrice + deliveryPrice} грн</div>
                </div>
                <div
                    className={classnames(
                        "tab__pane",
                        style.tab__pane,
                        deliveryType === 'personally' && style.active
                    )}
                    onClick={changeDeliveryType}
                    data-delivery-type="personally"
                >
                    <div className={style.pane__text}>
                        <p className={style.pane__title}>Забрать самому. Внимание !!! Нужно ставить отметку Перезвоните мне ...</p>
                        <p className={style.pane__subtitle}>Со скидкой 20%, кроме (*)</p>
                    </div>
                    <div className={style.pane__price}>{totalPrice} грн</div>
                </div>
            </div>
            <div className={style.line}></div>
            {deliveryType === 'courier' && (
                <CheckoutFormTypeA
                    type={deliveryType}
                />
            )}
            {deliveryType === 'personally' && (
                <CheckoutFormTypeB
                    type={deliveryType}
                />
            )}
        </div>
    )
};

export const CheckoutFormTypeA = ({ type }) => {

    const fields = [
        [
            {
                id: 1,
                name: "checkout-user-name",
                HTMLElement: "input",
                type: "text",
                label: "Имя",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 2,
                name: "checkout-user-phone",
                HTMLElement: "input",
                type: "text",
                label: "Телефон",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 3,
                name: "checkout-user-email",
                HTMLElement: "input",
                type: "text",
                label: "Email",
                required: false,
                disabled: false,
                placeholder: ""
            },
            {
                id: 4,
                name: "checkout-user-mailing",
                HTMLElement: "input",
                type: "checkbox",
                label: "Оставляя свой Email я согласен получать еженедельную рассылку от MAFIA со скидками до 50%",
                required: false,
                disabled: false,
                placeholder: ""
            },
        ],
        [
            {
                id: 5,
                name: "checkout-user-city",
                HTMLElement: "input",
                type: "text",
                label: "Город",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 6,
                name: "checkout-user-street",
                HTMLElement: "input",
                type: "text",
                label: "Улица",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 7,
                name: "checkout-user-build",
                HTMLElement: "input",
                type: "text",
                label: "Дом",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 8,
                name: "checkout-user-entrance",
                HTMLElement: "input",
                type: "text",
                label: "Подьезд",
                required: false,
                disabled: false,
                placeholder: ""
            },
            {
                id: 9,
                name: "checkout-user-flat",
                HTMLElement: "input",
                type: "text",
                label: "Квартира",
                required: false,
                disabled: false,
                placeholder: ""
            },
        ],
        [
            {
                id: 10,
                name: "checkout-user-date",
                HTMLElement: "select",
                type: "select",
                label: "Дата",
                required: false,
                disabled: false,
                options: [
                    "Сегодня",
                    "Завтра",
                    "31 декабря",
                    "1 января",
                    "2 января",
                    "3 января",
                    "4 января",
                    "5 января"
                ],
                placeholder: ""
            },
            {
                id: 11,
                name: "checkout-user-time",
                HTMLElement: "select",
                type: "select",
                label: "Время",
                required: false,
                disabled: true,
                options: [],
                placeholder: "Выберите время"
            },
            {
                id: 12,
                name: "checkout-user-payment",
                HTMLElement: "select",
                type: "select",
                label: "Форма оплати",
                required: false,
                disabled: false,
                options: [
                    "Наличными",
                    "Картой онлайн"
                ],
                placeholder: ""
            },
            {
                id: 13,
                name: "checkout-user-rest",
                HTMLElement: "input",
                type: "text",
                label: "Подготовить сдачу с",
                required: false,
                disabled: false,
                placeholder: "У меня будет без сдачи"
            },
        ]
    ];
    const footerFields = [
        {
            id: 14,
            name: "checkout-user-comment",
            HTMLElement: "textarea",
            type: "textarea",
            label: "",
            required: false,
            disabled: false,
            placeholder: ""
        },
        {
            id: 15,
            name: "checkout-user-callback",
            HTMLElement: "input",
            type: "checkbox",
            label: "Перезвоните мне для уточнения деталей заказа",
            required: false,
            disabled: false,
            placeholder: ""
        },
    ];

    return (
        <CheckoutFormContainer
            // formName={type}
            fields={fields}
            footer={footerFields}
        />
    )
};

export const CheckoutFormTypeB = ({ type }) => {

    const fields = [
        [
            {
                id: 1,
                name: "checkout-user-name",
                HTMLElement: "input",
                type: "text",
                label: "Имя",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 2,
                name: "checkout-user-phone",
                HTMLElement: "input",
                type: "text",
                label: "Телефон",
                required: true,
                disabled: false,
                placeholder: ""
            },
            {
                id: 3,
                name: "checkout-user-restaurant",
                HTMLElement: "select",
                type: "select",
                label: "Ресторан",
                required: true,
                disabled: false,
                options: [
                    "Ресторан на Оболони (ул. Маршала Тимошенко 21, корпус 3)",
                    "Ресторан на Подоле (ул. Верхний Вал, 24)",
                    "Ресторан на Виноградаре (ул. Луговая 12, ТРК 'Караван')",
                    "Ресторан на Лукьяновке (ул. Сечевых Стрельцов, 77)",
                    "Ресторан на Олимпийской (ул. Большая Васильковская, 76)",
                    "Ресторан на Харьковском массиве (ул. Харьковское шоссе, 144а)",
                    "Ресторан на Золотых Воротах (ул. Богдана Хмельницкого, 27/1)",
                    "Ресторан на Левобережной (пр. Броварской, 17)",
                    "Ресторан на Воскресенке (б-р Перова, 36, ТЦ 'Квадрат')"
                ],
                placeholder: ""
            },
            {
                id: 4,
                name: "checkout-user-date",
                HTMLElement: "select",
                type: "select",
                label: "Дата",
                required: false,
                disabled: false,
                options: [
                    "Сегодня",
                    "Завтра",
                    "31 декабря",
                    "1 января",
                    "2 января",
                    "3 января",
                    "4 января",
                    "5 января"
                ],
                placeholder: ""
            },
            {
                id: 5,
                name: "checkout-user-time",
                HTMLElement: "select",
                type: "select",
                label: "Время",
                required: false,
                disabled: true,
                options: [],
                placeholder: "Выберите время"
            },
            {
                id: 6,
                name: "checkout-user-payment",
                HTMLElement: "select",
                type: "select",
                label: "Форма оплати",
                required: false,
                disabled: false,
                options: [
                    "Наличными",
                    "Картой онлайн"
                ],
                placeholder: ""
            },
        ]
    ];
    const footerFields = [
        {
            id: 7,
            name: "checkout-user-comment",
            HTMLElement: "textarea",
            type: "textarea",
            label: "",
            required: false,
            disabled: false,
            placeholder: ""
        },
        {
            id: 8,
            name: "checkout-user-callback",
            HTMLElement: "input",
            type: "checkbox",
            label: "Перезвоните мне для уточнения деталей заказа",
            required: false,
            disabled: false,
            placeholder: ""
        },
    ];

    return (
        <CheckoutFormContainer
            // formName={type}
            fields={fields}
            footer={footerFields}
        />
    )
};


