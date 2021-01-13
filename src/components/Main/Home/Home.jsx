import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import { requireHomePage } from '../../../redux/home-reducer';
import MainSlider from './MainSlider/MainSlider';
import DeliverySlider from './DeliverySlider/DeliverySlider';
import Preloader from './../../Preloader/Preloader';
import HomeSliderContainer from './HomeSlider/HomeSliderContainer';

import style from './Home.module.scss'


const Home = () => {

    const dispatch = useDispatch();
    const mainSlider = useSelector(state => state.home.mainSlider);
    const homeSlider = useSelector(state => state.home.homeSlider);
    const isFetching = useSelector(state => state.home.isFetchingHome);

    React.useEffect(() => {
        if (!mainSlider.length && !homeSlider.length) dispatch(requireHomePage());
    }, []);

    return (        
        isFetching ? <Preloader/> : (
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
                        <HomeSliderContainer
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
                        <DeliverySlider />
                    </div>
                </section>
            </div>
        )
    )
};

export default Home;
