import React from 'react'

const PhoneInput = props => {

    const { id, callback, ...rest } = props;

    const SET_VALUE = 'SET_VALUE';
    const CHANGE_VALUE = 'CHANGE_VALUE';

    const initialState = {
        value: '',
        initialValue: '+38 ',
    };    

    const reducer = (state, action) => {
        switch (action.type) {
            case SET_VALUE:
                return { ...state, value: action.payload}
            case CHANGE_VALUE:
                const newValue = 
                return { ...state, value: action.payload}
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setValue = value => ({type: SET_VALUE, payload: value});
    const changeValue = value => ({type: CHANGE_VALUE, payload: value});

    // const [currentValue, setCurrentValue] = React.useState('');
    // let space = true;
    // const onChangeInput = event => {
    //     const value = event.target.value;
    //     const clearValue = +(value.slice(1).replace(/\s/g, ""))
    //     if (Number.isInteger(clearValue)) {
    //         setCurrentValue(value);
    //     } else if (/\s\s/.test(value)) {
    //         setCurrentValue(currentValue);
    //     } else {
    //         console.log('else');
    //         setCurrentValue(currentValue);
    //     }
    //     if (value.length > 16) {
    //         setCurrentValue(currentValue)
    //     };
    //     if (value.length === 7 && space) setCurrentValue(value + " ");
    //     if (value.length === 11 && space) setCurrentValue(value + " ");
    //     if(value.length < 16) {
    //         callback(true);
    //     }else{
    //         callback(false);
    //     }
        
    // };
    const onFocusInput = () => {
        if (!state.value) dispatch(setValue(state.initialValue));
    };
    const onBlurInput = () => {
        if (state.value === state.initialValue) dispatch(setValue(''));
    };
    const onChangeInput = event => {
        const value = event.target.value;
        const clearValue = +(value.slice(1).replace(/\s/g, ""));
        if(Number.isInteger(clearValue)) dispatch(changeValue(clearValue))
    };
    // const onKeyDownInput = event => {
    //     const value = event.target.value;
    //     if (event.code === "Backspace") {
    //         space = false
    //         setCurrentValue(value.slice(0, value.length))
    //     }
    // };

    return (
        <input
            id={id}
            type="text"
            autoComplete="off"
            value={state.value}
            // {...rest}
            // value={currentValue}
            // onChange={onChangeInput}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            // onKeyDown={onKeyDownInput}            
        />
    )
}

export default PhoneInput
