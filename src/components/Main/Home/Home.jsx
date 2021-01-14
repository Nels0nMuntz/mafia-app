import React from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux';

import { requestHomePage } from '../../../redux/home-reducer';
import MainSlider from './MainSlider/MainSlider';
import DeliverySlider from './DeliverySlider/DeliverySlider';
import Preloader from './../../Preloader/Preloader';
import HomeSliderContainer from './HomeSlider/HomeSliderContainer';

import style from './Home.module.scss'
import { createSelector } from 'reselect';
import { requestCatalog } from '../../../redux/catalog-reducer';


const Home = () => {

    const dispatch = useDispatch();
    const mainSlider = useSelector(state => state.home.mainSlider);
    const homeSlider = useSelector(createSelector(
        state => state.catalog.prods,
        prods => {
            if(!Object.keys(prods).length) return [];
            let reccomendedList = [];
            for(let prod in prods){
                const reccomended = prods[prod].list.filter(item => item.isReccomended);
                if(reccomended.length) reccomendedList = reccomendedList.concat(reccomended);
            };
            return reccomendedList;
        }
    ));
    // const isProdsEmpty = useSelector(createSelector(
    //     state => state.catalog.prods,
    //     prods => !Object.keys(prods).length
    // ))
    const isFetching = useSelector(state => state.home.isFetchingHome);

    React.useEffect(() => {
        if (!mainSlider.length) dispatch(requestHomePage());
        dispatch(requestCatalog());
        // if(isProdsEmpty) dispatch(requestCatalog());
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
