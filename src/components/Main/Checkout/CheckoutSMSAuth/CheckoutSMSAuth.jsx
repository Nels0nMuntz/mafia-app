import React from 'react'
import { Link } from 'react-router-dom';
import PhoneInput from '../../../common/PhoneInput/PhoneInput';


const CheckoutSMSAuth = () => {

    // const [isDisabled, setIsDisabled] = React.useState(true);
    let isDisabled = true;
    // const changeDisabled = value => setIsDisabled(false)
    // const [current, setCurrent] = React.useState('');

    // if (current.length < 16) {
    //     if (disabled === false) setDisabled(true);
    // } else {
    //     setDisabled(false);
    // }

    const button = React.useRef();

    React.useEffect(() => {
        // isDisabled = changeDisabled
        if (isDisabled) {
            button.current.setAttribute("disabled", "")
        } else {
            button.current.removeAttribute("disabled")
        }
    }, [isDisabled])

    return (
        <form>
            <label htmlFor="checkout-input">Номер телефона:</label>
            <PhoneInput
                id="checkout-input"
                // callback={changeDisabled}
            />
            <Link to='/checkout/without-auth'>
                <button ref={button}>Продолжить с СМС-кодом для авторизации</button>
            </Link>
            <span>и получить бонусы на карту</span>
        </form>
    )
};

export default CheckoutSMSAuth;