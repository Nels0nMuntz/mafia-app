import React from 'react'


const CheckoutForm = () => {

    const [currentValue, setCurrentValue] = React.useState('');

    const onChangeInput = event => setCurrentValue(event.target.value);
    const button = React.useRef();
    const form = React.useRef();

    // React.useEffect(() => new FormData(form.current).values().forEach(item => console.log(item)))

    return (
        <form ref={form}>
            <label htmlFor="checkout-input">Номер телефона:</label>
            <input id="checkout-input" type="text" name="userPhone" value={currentValue} onChange={onChangeInput} />
            <textarea name="textarea" >texterea</textarea>
            <button type="submit" ref={button}>Продолжить с СМС-кодом для авторизации</button>
            <span>и получить бонусы на карту</span>
        </form>
    )
};

export default CheckoutForm;