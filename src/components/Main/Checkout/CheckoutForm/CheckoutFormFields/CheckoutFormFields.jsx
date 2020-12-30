import React from 'react'
import { Field } from 'react-final-form';
import classnames from 'classnames'
import { Select } from 'antd';

import PhoneInput from '../../../../common/PhoneInput/PhoneInput';

import style from './CheckoutFormFields.module.scss'
import "./CheckoutFormFields.scss";

export const CheckoutFormFieldInput = React.memo(({ name, HTMLElement, type, label, disabled, placeholder }) => {

    return (
        <div className={style.form__section_item}>
            <Field
                name={name}
                type={type}
                component={HTMLElement}
                initialValue={name === "checkout-user-city" ? "Харьков" : ""}
            >
                {({ input, meta }) => {
                    return (
                        <React.Fragment>
                            <label htmlFor={name}>{label}:</label>
                            <div className={classnames(
                                style.input_wrapper,
                                meta.error && meta.touched && !meta.active && style.input_with_error
                            )}>
                                <input
                                    id={name}
                                    autoComplete="on"
                                    disabled={disabled}
                                    placeholder={placeholder}
                                    {...input}
                                />
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

export const CheckoutFormFieldSelect = React.memo(({ name, HTMLElement, type, label, disabled, options }) => {

    const { Option } = Select;

    return (
        <div className={style.form__section_item}>
            <Field
                name={name}
                type={type}
                component={HTMLElement}
                initialValue={options.length ? options[0] : null}
            >
                {({ input, meta }) => {
                    return (
                        <React.Fragment>
                            <label htmlFor={name}>{label}:</label>
                            <div className={classnames(
                                style.input_wrapper,
                                meta.error && meta.touched && !meta.active && style.input_with_error
                            )}>
                                <Select
                                    className="checkout-form__select"
                                    dropdownClassName="checkout-form__select_option"
                                    disabled={disabled}
                                    value={input.value}
                                    onChange={input.onChange}
                                    {...input}
                                >
                                    {options.map((option, i) => <Option value={option} key={i}>{option}</Option>)}
                                </Select>
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

export const CheckoutFormFieldPhone = React.memo(({ name, HTMLElement, type, label, disabled }) => {

    return (
        <div className={style.form__section_item}>
            <Field
                name={name}
                component={HTMLElement}
                type={type}
            >
                {({ input, meta }) => (
                    <React.Fragment>
                        <label htmlFor={name}>{label}:</label>
                        <div className={classnames(
                            style.input_wrapper,
                            meta.error && meta.visited && !meta.active && style.input_with_error
                        )}>
                            <PhoneInput
                                {...input}
                                id={name}
                                value={input.value}
                                disabled={disabled}
                                onChange={input.onChange}
                                onFocus={input.onFocus}
                                onBlur={input.onBlur}
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

export const CheckoutFormFieldCheckbox = React.memo(({ name, type, HTMLElement, label, disabled, placeholder }) => {

    return (
        <div className={classnames(
            style.form__section_item,
            'custom-checkbox'
        )}>
            <Field
                name={name}
                component={HTMLElement}
                type={type}
            >
                {({ input }) => (
                    <React.Fragment>
                        <input
                            id={name}
                            className="visually-hidden"
                            disabled={disabled}
                            placeholder={placeholder}
                            {...input}
                        />
                        <label htmlFor={name}>{label}</label>
                    </React.Fragment>
                )}
            </Field>
        </div>
    )
});

export const CheckoutFormFieldTextarea = React.memo(({ name, HTMLElement, disabled, placeholder }) => {

    return (
        <Field
            name={name}
            component={HTMLElement}
        >
            {({ input }) => (
                <textarea
                    id={name}
                    disabled={disabled}
                    placeholder={placeholder}
                    {...input}
                ></textarea>
            )}
        </Field>
    )
});