import React from 'react'

const PhoneInput = ({ disabled, setDisabled }) => {

    const [currentValue, setCurrentValue] = React.useState('');
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

    return (
        <input
            type="text"
            autoComplet="off"
            value={currentValue}
            onChange={onChangeInput}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            onKeyDown={onKeyDownInput}
        />
    )
}

export default PhoneInput
