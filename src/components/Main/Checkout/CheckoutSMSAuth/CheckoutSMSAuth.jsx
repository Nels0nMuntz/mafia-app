import React from 'react'
import { Link } from 'react-router-dom';
import PhoneInput from '../../../common/PhoneInput/PhoneInput';


const CheckoutSMSAuth = () => {

    const [isDisabled, setIsDisabled] = React.useState(true);
    const changeIsDisabled = value => {
        if(isDisabled && value.length < 16) return
        if(!isDisabled && value.length < 16) setIsDisabled(true)
        if(isDisabled && value.length === 16) setIsDisabled(false)
    }

    const button = React.useRef();

    React.useEffect(() => {
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
                onChange={changeIsDisabled}
            />
            <Link to='/checkout/without-auth'>
                <button ref={button}>Продолжить с СМС-кодом для авторизации</button>
            </Link>
            <span>и получить бонусы на карту</span>
        </form>
    )
};

export default CheckoutSMSAuth;