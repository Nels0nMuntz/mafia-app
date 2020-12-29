import React from 'react'

const PhoneInput = ({ id, onChange = () => {}, onFocus = () => {}, onBlur = () => {}, ...rest }) => {

    const pattern = '+XX XXX XXXX XXX'
    const matchAll = [...pattern.matchAll(/\W/g)];

    const SET_INIT_VALUE = 'SET_INIT_VALUE';
    const SET_EMPTY_VALUE = 'SET_EMPTY_VALUE';
    const CHANGE_VALUE = 'CHANGE_VALUE';

    const getClearNumber = string => +(string.slice(1).replace(/\s/g, ""));
    const getFullNumber = value => {
        const arr = value.toString().split('');
        let i = 0;
        const fullNumber = arr
            .reduce((prev, curr) => {
                const found = matchAll.find(item => item.index === i)
                if (found) {
                    prev.push(found[0], curr);
                    i += 1
                } else {
                    prev.push(curr);
                }
                i += 1;
                return prev;
            }, [])
            .join('');
        return fullNumber;
    };

    const initialState = {
        value: '',
        initialValue: '+38 ',
        emptylValue: '',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case SET_INIT_VALUE:
                return { ...state, value: state.initialValue }
            case SET_EMPTY_VALUE:
                return { ...state, value: state.emptylValue }
            case CHANGE_VALUE:
                return { ...state, value: action.payload }
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setInitValueAC = () => ({ type: SET_INIT_VALUE });
    const setEmptyValueAC = () => ({ type: SET_EMPTY_VALUE });
    const changeValueAC = value => ({ type: CHANGE_VALUE, payload: value });

    const onFocusInput = () => {
        if (!state.value){
            dispatch(setInitValueAC());
            onChange(state.initialValue);
        }
        onFocus();
    };
    const onBlurInput = () => {
        if (state.value === state.initialValue){
            dispatch(setEmptyValueAC());
            onChange(state.emptylValue)
        }
        onBlur();
    };
    const onChangeInput = event => {
        const value = event.target.value;
        const clearNumber = getClearNumber(value);
        const fullNumber = getFullNumber(clearNumber);
        if (Number.isInteger(clearNumber)) {
            if (clearNumber === getClearNumber(state.initialValue)) {
                dispatch(setInitValueAC());
                onChange(state.initialValue)
            } else {
                dispatch(changeValueAC(fullNumber));
                onChange(fullNumber)
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
