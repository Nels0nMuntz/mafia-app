import React from 'react'

const PhoneInput = ({ id, callback = null, ...rest }) => {

    const pattern = '+XX XXX XXXX XXX'
    const matchAll = [...pattern.matchAll(/\W/g)];

    const SET_INIT_VALUE = 'SET_INIT_VALUE';
    const SET_EMPTY_VALUE = 'SET_EMPTY_VALUE';
    const CHANGE_VALUE = 'CHANGE_VALUE';

    const initialState = {
        value: '',
        initialValue: '+38 ',
    };    

    const reducer = (state, action) => {
        switch (action.type) {
            case SET_INIT_VALUE:
                return { ...state, value: state.initialValue }
            case SET_EMPTY_VALUE:
                return { ...state, value: '' }
            case CHANGE_VALUE:
                const value = action.payload.toString().split('');
                let i = 0;
                const newValue = value.reduce((prev, curr) => {
                    const found = matchAll.find(item => item.index === i)
                    if(found){
                        prev.push(found[0], curr);
                        i += 1
                    }else{
                        prev.push(curr);
                    }
                    i += 1;
                    return prev;
                }, []);
                callback && callback(newValue.length);
                return { ...state, value: newValue.join('')}
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setInitValueAC = () => ({type: SET_INIT_VALUE});
    const setEmptyValueAC = () => ({type: SET_EMPTY_VALUE});
    const changeValueAC = value => ({type: CHANGE_VALUE, payload: value});

    // const setInitValue = () => ({type: SET_INIT_VALUE});
    // const setEmptyValue = () => ({type: SET_EMPTY_VALUE});
    // const changeValue = value => ({type: CHANGE_VALUE, payload: value});

    const getClearValue = string => +(string.slice(1).replace(/\s/g, ""));

    const onFocusInput = () => {
        if (!state.value) dispatch(setInitValueAC());
    };
    const onBlurInput = () => {
        if (state.value === state.initialValue) dispatch(setEmptyValueAC());
    };
    const onChangeInput = event => {
        const value = event.target.value;
        if(Number.isInteger(getClearValue(value))){
            if(getClearValue(value) === getClearValue(state.initialValue)){
                dispatch(setInitValueAC());
            }else{
                dispatch(changeValueAC(getClearValue(value)));
            }
        }
    };

    return (
        <input
            {...rest}
            id={id}
            type="text"
            autoComplete="off"
            value={state.value}
            maxLength={pattern.length}
            onChange={onChangeInput}
            onFocus={onFocusInput}
            onBlur={onBlurInput} 
        />
    )
}

export default PhoneInput
