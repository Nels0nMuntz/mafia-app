import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import { setMainSlider, setHomeSlider } from '../../../redux/home-reducer';
import MainSlider from './MainSlider/MainSlider';
import HomeSlider from './HomeSlider/HomeSlider';

import style from './Home.module.scss'


const Home = () => {

    const mainSlider = useSelector(state => state.home.mainSlider);
    const homeSlider = useSelector(state => state.home.homeSlider);
    const deliverySlider = useSelector(state => state.home.deliverySlider);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setMainSlider());
        dispatch(setHomeSlider());
    }, []);

    return (
        <div>
            <section>
                <MainSlider
                    sliderData={mainSlider}
                />
            </section>
            <section className={classnames(
                style.recommended,
                style.section__wrapper
            )}>
                <div className={style.titleBlock}>
                    <h2>Мы рекомендуем</h2>
                </div>
                <div className={style.slider_container}>
                    <HomeSlider 
                        sliderData={homeSlider}
                    />
                </div>
            </section>
            <section className={classnames(
                style.deliveryMenu,
                style.section__wrapper
            )}>
                <div className={style.titleBlock}>
                    <h2>Меню доставки</h2>
                </div>
                <div className={style.slider_container}>

                </div>
            </section>
        </div>
    )
}

export default Home
