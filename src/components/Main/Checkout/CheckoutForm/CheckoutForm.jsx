import React from 'react'
import { Form } from 'react-final-form'

import {
    CheckoutFormFieldInput,
    CheckoutFormFieldSelect,
    CheckoutFormFieldPhone,
    CheckoutFormFieldCheckbox
} from './CheckoutFormFields/CheckoutFormFields';
import CheckoutFormFooter from './CheckoutFormFooter/CheckoutFormFooter';

import style from './CheckoutForm.module.scss'
import { PropTypes } from 'prop-types';


const CheckoutForm = ({ fields, footer, totalPrice, deliveryPrice, onSubmit, validate, onClickSubmit }) => {

    const getFields = fields => {
        return fields.map(item => {
            const { id, name, HTMLElement } = item
            switch (name) {
                case "checkout-user-phone":
                    return (
                        <CheckoutFormFieldPhone
                            key={id}
                            {...item}
                        />
                    );
                case "checkout-user-mailing":
                    return (
                        <CheckoutFormFieldCheckbox
                            key={id}
                            {...item}
                        />
                    )
                default:
                    return (
                        (
                            HTMLElement === "input" && (
                                <CheckoutFormFieldInput
                                    key={id}
                                    {...item}
                                />
                            )) || (
                            HTMLElement === "select" && (
                                <CheckoutFormFieldSelect
                                    key={id}
                                    {...item}
                                />
                            ))
                    )
            }
        })
    };

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
                        {fields.map((fieldsGrup, index) => (
                            <div className={style.form__section} key={index}>
                                {getFields(fieldsGrup)}
                            </div>
                        ))}
                        <CheckoutFormFooter
                            fields={footer}
                        />
                    </div>
                    <div className={style.form__finalize}>
                        <div className={style.finalize__container}>
                            <div className={style.finalize__inner}>
                                <div className={style.finalize__row}>
                                    <div>Сумма:</div>
                                    <div>{totalPrice} грн</div>
                                </div>
                                <div className={style.finalize__row}>
                                    <div>Доставка:</div>
                                    <div>{deliveryPrice ? `${deliveryPrice} грн` : 'Бесплатно'}</div>
                                </div>
                                <div className={style.finalize__row}>
                                    <div>Упаковка:</div>
                                    <div>19 грн</div>
                                </div>
                                <div className={`${style.finalize__row} ${style.finalize__row_total}`}>
                                    <div>К оплате:</div>
                                    <div>{totalPrice + deliveryPrice + 19} грн</div>
                                </div>
                                <div
                                    onClick={onClickSubmit}
                                >
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

CheckoutForm.propTypes = {
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired
};

export default CheckoutForm
