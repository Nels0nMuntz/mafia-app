import React from 'react'
import classnames from 'classnames'

import style from './CheckoutForm.module.scss'
import { Field, Form } from 'react-final-form'
import PhoneInput from '../../../common/PhoneInput/PhoneInput'

const CheckoutForm = () => {

    const inputs = [
        {
            id: 1,
            name: "checkout-user-name",
            label: "Имя"
        },
        {
            id: 2,
            name: "checkout-user-phone",
            label: "Телефон"
        },
        {
            id: 3,
            name: "checkout-user-email",
            label: "Email"
        },
        {
            id: 4,
            name: "checkout-user-city",
            label: "Город"
        },
        {
            id: 5,
            name: "checkout-user-street",
            label: "Улица"
        },
        {
            id: 6,
            name: "checkout-user-house",
            label: "Дом"
        },
        {
            id: 7,
            name: "checkout-user-entrance",
            label: "Подьезд"
        },
        {
            id: 8,
            name: "checkout-user-flat",
            label: "Квартира"
        }
    ]

    const patterns = {
        name: new RegExp('^[А-Я]{1}([а-я]+)$'),
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    };

    const onSubmit = values => console.log(values);
    const validate = values => {

        const errors = {};

        inputs.forEach(({ name }) => { if (!values[name]) errors[name] = 'Поле обязательное для заполнения'; })

        if (values["checkout-user-name"] && !patterns.name.test(values["checkout-user-name"])) errors["checkout-user-name"] = 'Напиши как в паспорте';
        if (values["checkout-user-email"] && !patterns.email.test(values["checkout-user-email"])) errors["checkout-user-email"] = 'Неверный формат E-mail';

        return errors;
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
                        <div className={style.form__section}>
                            {inputs.slice(0, 3).map(({ id, name, label }) => (
                                <div className={style.form__section_item} key={id}>
                                    <Field
                                        name={name}
                                    >
                                        {({ input, meta }) => (
                                            <React.Fragment>
                                                {/* {console.log(input)} */}
                                                {console.log(meta)}
                                                <label htmlFor={name}>{label}:</label>
                                                <div className={classnames(
                                                    style.input_wrapper,
                                                    meta.error && meta.touched && !meta.active && style.input_with_error
                                                )}>
                                                    {name === "checkout-user-phone" ? (
                                                        <PhoneInput
                                                            id={name}
                                                            {...input}
                                                        />
                                                    ) : (
                                                            <input
                                                                id={name}
                                                                type="text"
                                                                autoComplete="off"
                                                                {...input}
                                                            />
                                                        )}
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
                            <div className={classnames(
                                style.form__section_item,
                                'custom-checkbox'
                            )}>
                                <input type="checkbox" name="checkout-user-mailing" id="checkout-user-mailing"
                                    className="visually-hidden"
                                />
                                <label htmlFor="checkout-user-mailing">Оставляя свой Email я согласен получать еженедельную рассылку от MAFIA со скидками до 50%</label>
                            </div>
                        </div>
                        <div className={style.form__section}>
                            {inputs.slice(3, 8).map(({ id, name, label }) => (
                                <div className={style.form__section_item} key={id}>
                                    <Field
                                        name={name}
                                    >
                                        {({ input, meta }) => (
                                            <React.Fragment>
                                                {/* {console.log(meta)} */}
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
                        </div>
                        <div className={style.form__section}>
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
                                <button className="item-homeSlider__btn item-homeSlider__btn-mini">
                                    Оформить заказ
                                </button>
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
