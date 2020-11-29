import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { toggleMenuState } from '../../../redux/header-reducer'

import style from './Hamburger.module.scss'


const Hamburger = () => {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.header.isMenuOpen);
    const node = React.useRef();
    
    const onClickBurger = () => {
        if(!isMenuOpen){
            console.log('open');
            dispatch(toggleMenuState(true));
        }
        node.current.removeEventListener('click', onClickBurger)
    };
    
    console.log(node);

    return (
        <div className={style.hamburger}>
            {/* <input 
                className={classnames(
                    style.burger, 
                    style.menu_3
                )}
                type="checkbox" 
                id="burger"
            /> */}
            <div 
                className={classnames(
                    style.burger_wrapper,
                    isMenuOpen && style.active
                )}
                className={style.burger_wrapper}
                onClick={onClickBurger}
                ref={node}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        // <div className={style.hamburger}>
        //     <input 
        //         className={classnames(
        //             style.burger, 
        //             style.menu_3
        //         )}
        //         type="checkbox" 
        //         id="burger"
        //     />
        //     <label 
        //         htmlFor="burger"
        //         onClick={onClickBurger}
        //     >
        //         <div></div>
        //         <div></div>
        //         <div></div>
        //     </label>
        // </div>
    )
}

export default Hamburger
