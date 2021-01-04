import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { setErrors, changeErrorVisibility, changeReadyToRenderErrors } from '../../../../redux/checkout-reducer';
import CheckoutForm from './CheckoutForm';
import { useHistory  } from 'react-router-dom';
import { clearCart } from './../../../../redux/cart-reducer';


const CheckoutFormContainer = ({ fields, footer }) => {

    const totalPrice = useSelector(createSelector(
        state => state.cart.totalPrice,
        totalPrice => totalPrice
    ));
    const deliveryPrice = useSelector(createSelector(
        state => state.cart.deliveryPrice,
        deliveryPrice => deliveryPrice
    ));
    let history = useHistory()
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.checkout.isVisible);   
    React.useEffect(() => dispatch(changeReadyToRenderErrors(true)), []);

    const patterns = {
        name: new RegExp('^[А-Я]{1}([а-я]+)$'),
        city: new RegExp('^[А-Я]?([а-я]+)$'),
        street: new RegExp('^[А-Я]?([а-я]+[1-9]*)$'),
        build: new RegExp('^[1-9]+([а-я]*)$'),
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    };
    
    const onSubmit = props => {
        console.log(props.values);
        // select data from store
        // ...
        // clear cart
        dispatch(clearCart());
        history.push("/checkout-finish");
    };
    const validate = values => {
        const errors = {};
        fields.forEach(arr => {
            arr.forEach(({ name, required }) => {
                if (!values[name] && required) errors[name] = 'Поле обязательное для заполнения';
            })
        });
        if (values["checkout-user-name"] && !patterns.name.test(values["checkout-user-name"])) errors["checkout-user-name"] = 'Укажите свое имя';
        if (values["checkout-user-phone"] && values["checkout-user-phone"].length < 16) errors["checkout-user-phone"] = 'Неверный формат номера телефона';
        if (values["checkout-user-email"] && !patterns.email.test(values["checkout-user-email"])) errors["checkout-user-email"] = 'Неверный формат E-mail';
        if (values["checkout-user-city"] && !patterns.city.test(values["checkout-user-city"])) errors["checkout-user-city"] = 'Некорректно указано название';
        if (values["checkout-user-street"] && !patterns.street.test(values["checkout-user-street"])) errors["checkout-user-street"] = 'Некорректно указано название';
        if (values["checkout-user-build"] && !patterns.build.test(values["checkout-user-build"])) errors["checkout-user-build"] = 'Некорректно указано номер дома';
        dispatch(setErrors(Object.values(errors)));
        return errors;
    };

    const onClickSubmit = () => !isVisible ? dispatch(changeErrorVisibility(true)) : undefined; // it works for portrait screen and lower

    return (
        <CheckoutForm
            fields={fields}
            footer={footer}
            totalPrice={totalPrice}
            deliveryPrice={deliveryPrice}
            onSubmit={onSubmit}
            validate={validate}
            onClickSubmit={onClickSubmit}
        />
    )
};

export default CheckoutFormContainer;
