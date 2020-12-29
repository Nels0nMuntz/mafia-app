import React from 'react'
import { Field } from 'react-final-form';
import classnames from 'classnames'
import { Select } from 'antd';

import PhoneInput from '../../../common/PhoneInput/PhoneInput';

import style from './CheckoutForm.module.scss'
import "./CheckoutFormField.scss";

export const CheckoutFormField = React.memo(({ id, name, HTMLElement, type, label, disabled, options, placeholder }) => {

    const { Option } = Select;

    return (
        <div className={style.form__section_item} key={id}>
            <Field
                name={name}
                component={HTMLElement}
                initialValue={(name === "checkout-user-city" && "Харьков") || (options && options[0])}
            >
                {({ input, meta }) => {
                    return (
                        <React.Fragment>
                            <label htmlFor={name}>{label}:</label>
                            <div className={classnames(
                                style.input_wrapper,
                                meta.error && meta.touched && !meta.active && style.input_with_error
                            )}>
                                {HTMLElement === "input" && (
                                    <input
                                        id={name}
                                        type={type}
                                        autoComplete="on"
                                        disabled={disabled}
                                        placeholder={placeholder}
                                        {...input}
                                    />
                                )}
                                {HTMLElement === "select" && (
                                    <Select
                                        className="checkout-form__select"
                                        dropdownClassName="checkout-form__select_option"
                                        disabled={disabled}
                                        value={input.value}
                                        onChange={input.onChange}
                                        placeholder={placeholder}
                                        {...input}

                                    >
                                        {options.map((option, i) => <Option value={option} key={i}>{option}</Option>)}
                                    </Select>
                                )}
                                <div className={style.input_warning_icon}>!</div>
                                <div className={style.input_warning_message}>
                                    <div>{meta.error}</div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}
            </Field>
        </div>
    )
});

export const CheckoutFormFieldPhone = (({ id, name, label }) => {

    return (
        <div className={style.form__section_item} key={id}>
            <Field
                name={name}
            >
                {({ input, meta }) => (
                    <React.Fragment>
                        {console.log(input.value)}
                        <label htmlFor={name}>{label}:</label>
                        <div className={classnames(
                            style.input_wrapper,
                            meta.error && meta.visited && !meta.active && style.input_with_error
                        )}>
                            <PhoneInput
                                {...input}
                                id={name}
                                onChange={input.onChange}
                                onFocus={input.onFocus}
                                onBlur={input.onBlur}
                                value={input.value}

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
    )
});
