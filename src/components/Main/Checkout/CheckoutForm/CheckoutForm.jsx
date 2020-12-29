import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import style from './CheckoutForm.module.scss'
import { Form } from 'react-final-form'
import { CheckoutFormField, CheckoutFormFieldPhone } from './CheckoutFormField';
import { setErrors, changeErrorVisibility } from '../../../../redux/checkout-reducer';


const CheckoutForm = () => {

    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.checkout.isVisible)

    const inputs = [
        {
            id: 1,
            name: "checkout-user-name",
            type: "text",
            label: "Имя",
            required: true,
            disabled: false
        },
        // {
        //     id: 2,
        //     name: "checkout-user-phone",
        //     type: "text",
        //     label: "Телефон",
        //     required: true,
        //     disabled: false
        // },
        {
            id: 3,
            name: "checkout-user-email",
            type: "text",
            label: "Email",
            required: false,
            disabled: false
        },
        {
            id: 4,
            name: "city",
            type: "text",
            label: "Город",
            required: true,
            disabled: false
        },
        {
            id: 5,
            name: "checkout-user-street",
            type: "text",
            label: "Улица",
            required: true,
            disabled: false
        },
        {
            id: 6,
            name: "build",
            type: "text",
            label: "Дом",
            required: true,
            disabled: false
        },
        {
            id: 7,
            name: "checkout-user-entrance",
            type: "text",
            label: "Подьезд",
            required: false,
            disabled: false
        },
        {
            id: 8,
            name: "checkout-user-flat",
            type: "text",
            label: "Квартира",
            required: false,
            disabled: false
        },
        {
            id: 9,
            name: "checkout-user-date",
            type: "select",
            label: "Дата",
            required: true,
            disabled: false
        },
        {
            id: 10,
            name: "checkout-user-time",
            type: "select",
            label: "Время",
            required: true,
            disabled: true
        },
        {
            id: 11,
            name: "checkout-user-payment",
            type: "select",
            label: "Форма оплати",
            required: true,
            disabled: false
        },
        {
            id: 12,
            name: "checkout-user-rest",
            type: "text",
            label: "Подготовить сдачу с",
            required: true,
            disabled: false
        },
    ];

    const patterns = {
        name: new RegExp('^[А-Я]{1}([а-я]+)$'),
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    };

    const onSubmit = values => console.log(values);
    const validate = values => {

        const errors = {};

        inputs.forEach(({ name, required }) => { if (!values[name] && required) errors[name] = 'Поле обязательное для заполнения'; })

        if (values["checkout-user-name"] && !patterns.name.test(values["checkout-user-name"])) errors["checkout-user-name"] = 'Укажите свое имя';
        if (values["checkout-user-email"] && !patterns.email.test(values["checkout-user-email"])) errors["checkout-user-email"] = 'Неверный формат E-mail';

        dispatch(setErrors(Object.values(errors)));

        return errors;
    };

    const onClickSubmit = () => !isVisible ? dispatch(changeErrorVisibility(true)) : undefined;

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form
                    className={style.tab__form}
                    onSubmit={handleSubmit}
                >
                    <div className={style.form__wrapper}>
                        <div className={style.form__section}>
                            {inputs.slice(0, 2).map(({ id, name, type, label }) => (
                                <CheckoutFormField
                                    id={id}
                                    name={name}
                                    type={type}
                                    label={label}
                                />
                            ))}
                        </div>
                        <div className={style.form__section}>
                            {inputs.slice(2,7).map(({ id, name, type, label }) => (
                                <CheckoutFormField
                                    id={id}
                                    name={name}
                                    type={type}
                                    label={label}
                                />
                            ))}
                        </div>
                        <div className={style.form__section}>
                            {inputs.slice(7).map(({ id, name, type, label, disabled }) => (
                                <CheckoutFormField
                                    id={id}
                                    name={name}
                                    type={type}
                                    label={label}
                                    disabled={disabled}
                                />
                            ))}
                        </div>
                        {/* <div className={style.form__section}>
                            {inputs.slice(3, 8).map(({ id, name, label }) => (
                                <div className={style.form__section_item} key={id}>
                                    <Field
                                        name={name}
                                    >
                                        {({ input, meta }) => (
                                            <React.Fragment>
                                                <label htmlFor={name}>{label}:</label>
                                                <div className={classnames(
                                                    style.input_wrapper,
                                                    meta.error && meta.touched && !meta.active && style.input_with_error
                                                )}>
                                                    <input
                                                        id={name}
                                                        type="text"
                                                        autoComplete="off"
                                                        {...input}
                                                    />
                                                    <div className={style.input_warning_icon}>!</div>
                                                    <div className={style.input_warning_message}>
                                                        <div>{meta.error}</div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </Field>
                                </div>
                            ))}
                        </div> */}
                        {/* <div className={style.form__section}>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-date">Дата:</label>
                                <input id="checkout-user-date" name="checkout-user-date" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-time">Время:</label>
                                <input id="checkout-user-time" name="checkout-user-time" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-payment">Форма оплаты:</label>
                                <input id="checkout-user-payment" name="checkout-user-payment" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-rest">Подготовить сдачу с:</label>
                                <input id="checkout-user-rest" name="checkout-user-rest" type="text" />
                            </div>
                        </div>
                        <div className={style.form__footer}>
                            <div className={style.footer__comment}>
                                <button>Добавить коментарий к заказу</button>
                                <textarea name="checkout-user-comment" id="checkout-user-comment"></textarea>
                            </div>
                            <div className={classnames(
                                style.footer__checkbox,
                                'custom-checkbox'
                            )}>
                                <input type="checkbox" name="checkout-user-callback" id="checkout-user-callback"
                                    className="visually-hidden"
                                />
                                <label htmlFor="checkout-user-callback">Перезвоните мне для уточнения деталей заказа</label>
                            </div>
                        </div> */}
                    </div>
                    <div className={style.form__finalize}>
                        <div className={style.finalize__container}>
                            <div className={style.finalize__inner}>
                                <div className={style.finalize__row}>
                                    <div>Сумма:</div>
                                    <div>524 грн</div>
                                </div>
                                <div className={style.finalize__row}>
                                    <div>Доставка:</div>
                                    <div>Бесплатно</div>
                                </div>
                                <div className={style.finalize__row}>
                                    <div>Упаковка:</div>
                                    <div>19 грн</div>
                                </div>
                                <div className={`${style.finalize__row} ${style.finalize__row_total}`}>
                                    <div>К оплате:</div>
                                    <div>543 грн</div>
                                </div>
                                <div onClick={onClickSubmit}>
                                    <button type="submit" className="item-homeSlider__btn item-homeSlider__btn-mini">
                                        Оформить заказ
                                    </button>
                                </div>
                                <small className={style.finalize__agreement}>
                                    <p>Нажимая кнопку "Оформить заказ" я принимаю</p>
                                    <p>пользовательское соглашение</p>
                                </small>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        />
    )
};

export default CheckoutForm;
