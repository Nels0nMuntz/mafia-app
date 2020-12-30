import React from 'react'
import classnames from 'classnames';

import { CheckoutFormFieldTextarea, CheckoutFormFieldCheckbox } from '../CheckoutFormFields/CheckoutFormFields';

import style from './CheckoutFormFooter.module.scss'

const CheckoutFormFooter = ({ fields }) => {

    const [commentMode, setCommentMode] = React.useState(true);
    const toggleCommentMode = () => setCommentMode(!commentMode);

    return (
        <div className={style.form__footer}>
            <div className={classnames(
                style.footer__comment,
                commentMode && style.footer__comment_close
            )}>
                <button
                    type="button"
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
    )
}

export default CheckoutFormFooter
