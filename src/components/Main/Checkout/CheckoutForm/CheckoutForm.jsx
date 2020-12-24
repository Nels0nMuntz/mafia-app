import React from 'react'
import classnames from 'classnames'

import style from './CheckoutForm.module.scss'
import { Field, Form } from 'react-final-form'

const CheckoutForm = () => {


    const patterns = {
        name: new RegExp('^[А-Я]{1}([а-я]+)$'),
    };

    const onSubmit = values => console.log(values);
    const validate = values => { 

        const errors = {};

        if(!values["checkout-user-name"]) errors["checkout-user-name"] = 'Поле обязательное для заполнения';
        if(!values["checkout-user-phone"]) errors["checkout-user-phone"] = 'Поле обязательное для заполнения';
        if(!values["checkout-user-email"]) errors["checkout-user-email"] = 'Поле обязательное для заполнения';
        if(values["checkout-user-name"] && !patterns.name.test(values["checkout-user-name"])) errors["checkout-user-name"] = 'Напиши как в паспорте';

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
                            <div className={style.form__section_item}>
                                <Field
                                    name="checkout-user-name"
                                >
                                    {({ input, meta }) => (                                        
                                        <React.Fragment>
                                            {/* {console.log(meta)} */}
                                            <label htmlFor="checkout-user-name">Имя:</label>
                                            <div className={classnames(
                                                style.input_wrapper,
                                                meta.error && meta.touched && !meta.active && style.input_with_error
                                            )}>
                                                <input
                                                    id="checkout-user-name"
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
                            <div className={style.form__section_item}>
                                <Field
                                    name="checkout-user-phone"
                                >
                                    {({ input, meta }) => (
                                        <React.Fragment>
                                            <label htmlFor="checkout-user-phone">Телефон:</label>
                                            <div className={classnames(
                                                style.input_wrapper,
                                                meta.error && meta.touched && style.input_with_error
                                            )}>
                                                <input
                                                    id="checkout-user-phone"
                                                    type="text"
                                                    autoComplete="off"
                                                    {...input}
                                                />
                                                <div className={style.input_warning_icon}>!</div>
                                                <div className={style.input_warning_message}>
                                                    <div>Поле обязательное для заполнения</div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </Field>
                            </div>
                            <div className={style.form__section_item}>
                                <Field
                                    name="checkout-user-email"
                                >
                                    {({ input, meta }) => (
                                        <React.Fragment>
                                            <label htmlFor="checkout-user-email">E-mail:</label>
                                            <div className={classnames(
                                                style.input_wrapper,
                                                meta.error && meta.touched && style.input_with_error
                                            )}>
                                                <input
                                                    id="checkout-user-email"
                                                    type="text"
                                                    autoComplete="off"
                                                    {...input}
                                                />
                                                <div className={style.input_warning_icon}>!</div>
                                                <div className={style.input_warning_message}>
                                                    <div>Поле обязательное для заполнения</div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )}
                                </Field>
                            </div>
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
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-city">Город:</label>
                                <input id="checkout-user-city" name="checkout-user-city" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-street">Улица:</label>
                                <input id="checkout-user-street" name="checkout-user-street" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-house">Дом:</label>
                                <input id="checkout-user-house" name="checkout-user-house" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-entrance">Подьезд:</label>
                                <input id="checkout-user-entrance" name="checkout-user-entrance" type="text" />
                            </div>
                            <div className={style.form__section_item}>
                                <label htmlFor="checkout-user-flat">Квартира:</label>
                                <input id="checkout-user-flat" name="checkout-user-flat" type="text" />
                            </div>
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
