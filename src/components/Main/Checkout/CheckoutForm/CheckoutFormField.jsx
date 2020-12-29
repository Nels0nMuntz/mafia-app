import React from 'react'
import { Field } from 'react-final-form';
import classnames from 'classnames'
import { Select } from 'antd';

import PhoneInput from '../../../common/PhoneInput/PhoneInput';

import style from './CheckoutForm.module.scss'

export const CheckoutFormField = React.memo(({ id, name, type, label }) => {

    const { Option } = Select;

    return (
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
                                type={type}
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
    )
});

export const CheckoutFormFieldPhone = React.memo(({ id, name, label }) => {

    const [valide, setValide] = React.useState(true)

    const onChangeInput = value => {
        if(valide && value < 16) setValide(false);
        if(!valide && value === 16) setValide(true);
    };

    React.useEffect(() => setValide(true), [])

    return (
        <div className={style.form__section_item} key={id}>
            <Field
                name={name}
            >
                {({ input, meta }) => (
                    <React.Fragment>
                        <label htmlFor={name}>{label}:</label>
                        <div className={classnames(
                            style.input_wrapper,
                            valide && style.input_with_error
                        )}>
                            <PhoneInput
                                id={name}
                                callback={onChangeInput}
                                {...input}
                            />
                            <div className={style.input_warning_icon}>!</div>
                            <div className={style.input_warning_message}>
                                <div>Введите номер телефона</div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </Field>
        </div>
    )
});
