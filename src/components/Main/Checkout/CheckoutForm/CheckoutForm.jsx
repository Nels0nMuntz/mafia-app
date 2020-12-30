import React from 'react'
import { Form } from 'react-final-form'

import {
    CheckoutFormField,
    CheckoutFormFieldPhone,
    CheckoutFormFieldCheckbox
} from './CheckoutFormFields/CheckoutFormFields';
import CheckoutFormFooter from './CheckoutFormFooter/CheckoutFormFooter';

import style from './CheckoutForm.module.scss'


const CheckoutForm = ({ fields, onSubmit, validate, onClickSubmit }) => {
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
                        <CheckoutFormFooter
                            fields={fields}
                        />
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
}

export default CheckoutForm
