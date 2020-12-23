import React from 'react'
import { Link } from 'react-router-dom';


const CheckoutSMSAuth = () => {

    const [currentValue, setCurrentValue] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);
    let space = true;
    const onChangeInput = event => {
        const value = event.target.value;
        const clearValue = +(value.slice(1).replace(/\s/g, ""))
        if (Number.isInteger(clearValue)) {
            setCurrentValue(value);
        } else if (/\s\s/.test(value)) {
            setCurrentValue(currentValue);
        } else {
            console.log('else');
            setCurrentValue(currentValue);
        }
        if (value.length > 16) {
            setCurrentValue(currentValue)
        };
        if (value.length === 7 && space) setCurrentValue(value + " ");
        if (value.length === 11 && space) setCurrentValue(value + " ");
        if (value.length < 16) {
            if (disabled === false) setDisabled(true);
        } else {
            setDisabled(false);
        }
    };
    const onFocusInput = () => {
        if (!currentValue) setCurrentValue('+38 ');
    };
    const onBlurInput = () => {
        if (currentValue === '+38 ') setCurrentValue('');
    };
    const onKeyDownInput = event => {
        const value = event.target.value;
        if (event.code === "Backspace") {
            space = false
            setCurrentValue(value.slice(0, value.length))
        }
    };

    const button = React.useRef();

    React.useEffect(() => {
        if (disabled) {
            button.current.setAttribute("disabled", "")
        } else {
            button.current.removeAttribute("disabled")
        }
    }, [disabled])

    return (
        <form>
            <label htmlFor="checkout-input">Номер телефона:</label>
            <input
                id="checkout-input"
                type="text"
                name="userPhone"
                autocomplet="false"
                value={currentValue}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
                onKeyDown={onKeyDownInput}
            />
            <Link to='/checkout/without-auth'>
                <button ref={button}>Продолжить с СМС-кодом для авторизации</button>
            </Link>
            <span>и получить бонусы на карту</span>
        </form>
    )
};

export default CheckoutSMSAuth;