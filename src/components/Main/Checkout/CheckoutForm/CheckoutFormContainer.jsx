import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setErrors, changeErrorVisibility } from '../../../../redux/checkout-reducer';
import CheckoutForm from './CheckoutForm';


const CheckoutFormContainer = () => {

    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.checkout.isVisible);   

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
        <CheckoutForm
            fields={fields}
            onSubmit={onSubmit}
            validate={validate}
            onClickSubmit={onClickSubmit}
        />
    )
};

export default CheckoutFormContainer;
