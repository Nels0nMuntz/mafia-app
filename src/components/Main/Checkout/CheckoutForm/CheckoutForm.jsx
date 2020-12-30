import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import style from './CheckoutForm.module.scss'
import { Form } from 'react-final-form'
import {
    CheckoutFormField,
    CheckoutFormFieldPhone,
    CheckoutFormFieldCheckbox,
    CheckoutFormFieldTextarea
} from './CheckoutFormField';
import { setErrors, changeErrorVisibility } from '../../../../redux/checkout-reducer';


const CheckoutForm = () => {

    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.checkout.isVisible);
    const [commentMode, setCommentMode] = React.useState(false);
    const toggleCommentMode = () => setCommentMode(!commentMode)

    const fields = [
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
        {
            id: 14,
            name: "checkout-user-comment",
            HTMLElement: "textarea",
            type: "textarea",
            label: "",
            required: false,
            disabled: false,
            placeholder: "У меня будет без сдачи"
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

    const patterns = {
        name: new RegExp('^[А-Я]{1}([а-я]+)$'),
        city: new RegExp('^[А-Я]?([а-я]+)$'),
        street: new RegExp('^[А-Я]?([а-я]+[1-9]*)$'),
        build: new RegExp('^[1-9]+([а-я]*)$'),
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    };

    const onSubmit = values => console.log(values);
    const validate = values => {
        const errors = {};
        fields.forEach(({ name, required }) => { if (!values[name] && required) errors[name] = 'Поле обязательное для заполнения'; });
        if (values["checkout-user-name"] && !patterns.name.test(values["checkout-user-name"])) errors["checkout-user-name"] = 'Укажите свое имя';
        if (values["checkout-user-phone"] && values["checkout-user-phone"].length < 16) errors["checkout-user-phone"] = 'Неверный формат номера телефона';
        if (values["checkout-user-email"] && !patterns.email.test(values["checkout-user-email"])) errors["checkout-user-email"] = 'Неверный формат E-mail';
        if (values["checkout-user-city"] && !patterns.city.test(values["checkout-user-city"])) errors["checkout-user-city"] = 'Некорректно указано название';
        if (values["checkout-user-street"] && !patterns.street.test(values["checkout-user-street"])) errors["checkout-user-street"] = 'Некорректно указано название';
        if (values["checkout-user-build"] && !patterns.build.test(values["checkout-user-build"])) errors["checkout-user-build"] = 'Некорректно указано номер дома';
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
                            {fields.slice(0, 4).map(({ id, name, HTMLElement, type, label, disabled }) => {
                                switch (name) {
                                    case "checkout-user-phone":
                                        return (
                                            <CheckoutFormFieldPhone
                                                key={id}
                                                id={id}
                                                name={name}
                                                type={type}
                                                label={label}
                                                disabled={disabled}
                                                HTMLElement={HTMLElement}
                                            />
                                        );
                                    case "checkout-user-mailing":
                                        return (
                                            <CheckoutFormFieldCheckbox
                                                key={id}
                                                name={name}
                                                type={type}
                                                label={label}
                                                disabled={disabled}
                                                HTMLElement={HTMLElement}
                                            />
                                        )
                                    default:
                                        return (
                                            <CheckoutFormField
                                                key={id}
                                                id={id}
                                                name={name}
                                                type={type}
                                                label={label}
                                                disabled={disabled}
                                                HTMLElement={HTMLElement}
                                            />
                                        )
                                }
                            })}
                        </div>
                        <div className={style.form__section}>
                            {fields.slice(4, 9).map(({ id, name, HTMLElement, type, label, disabled }) => (
                                <CheckoutFormField
                                    key={id}
                                    id={id}
                                    name={name}
                                    type={type}
                                    label={label}
                                    disabled={disabled}
                                    HTMLElement={HTMLElement}
                                />
                            ))}
                        </div>
                        <div className={style.form__section}>
                            {fields.slice(9, 13).map(({ id, name, HTMLElement, type, label, disabled, options, placeholder }) => (
                                <CheckoutFormField
                                    key={id}
                                    id={id}
                                    name={name}
                                    type={type}
                                    label={label}
                                    disabled={disabled}
                                    HTMLElement={HTMLElement}
                                    options={options}
                                    placeholder={placeholder}
                                />
                            ))}
                        </div>
                        <div className={style.form__footer}>
                            <div className={classnames(
                                style.footer__comment,
                                commentMode && style.footer__comment_close
                            )}>
                                <button
                                    onClick={toggleCommentMode}
                                >
                                    Добавить коментарий к заказу
                                </button>
                                <div className={classnames(
                                    style.comment__wrapper,
                                    commentMode && style.comment__wrapper_close
                                )}>
                                    {fields.map(({ id, name, HTMLElement, disabled }) => name === "checkout-user-comment" && (
                                        <CheckoutFormFieldTextarea
                                            key={id}
                                            name={name}
                                            HTMLElement={HTMLElement}
                                            disabled={disabled}
                                        />
                                    ))}
                                </div>
                            </div>
                            {fields.map(({ id, name, HTMLElement, type, label, disabled }) => name === "checkout-user-callback" && (
                                <CheckoutFormFieldCheckbox
                                    key={id}
                                    name={name}
                                    type={type}
                                    label={label}
                                    disabled={disabled}
                                    HTMLElement={HTMLElement}
                                />
                            ))}
                        </div>
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
