import React from 'react'
import { Link } from 'react-router-dom';
import PhoneInput from '../../../common/PhoneInput/PhoneInput';


const CheckoutSMSAuth = () => {

    const [disabled, setDisabled] = React.useState(true);

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
            <PhoneInput
                disabled={disabled}
                setDisabled={setDisabled}
            />
            <Link to='/checkout/without-auth'>
                <button ref={button}>Продолжить с СМС-кодом для авторизации</button>
            </Link>
            <span>и получить бонусы на карту</span>
        </form>
    )
};

export default CheckoutSMSAuth;