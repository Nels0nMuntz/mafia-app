import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import { setMainSlider } from '../../../redux/home-reducer';
import MainSlider from './MainSlider/MainSlider';
import HomeSlider from './HomeSlider/HomeSlider';

import style from './Home.module.scss'


const Home = () => {

    const sliderData = useSelector(state => state.home.mainSlider);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setMainSlider())
    }, []);

    return (
        <div>
            <section>
                <MainSlider
                    sliderData={sliderData}
                />
            </section>
            <section className={classnames(
                style.reccomended,
                style.section__wrapper
            )}>
                <div className={style.titleBlock}>
                    <h2>Мы рекомендуем</h2>
                </div>
                <div className={style.slider_container}>
                    <HomeSlider />
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
