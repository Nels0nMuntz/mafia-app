import React from 'react'

import MainSlider from './MainSlider/MainSlider';

import style from './Home.module.scss'


const Home = () => {

    return (
        <div>
            <section>
                <MainSlider />
            </section>
            <section className={style.reccomend}>
                <h2>Мы рекомендуем</h2>
                <div className={style.slider_container}>

                </div>
            </section>
            <section className={style.delivery}>
                <h2>Меню доставки</h2>
                <div className={style.slider_container}>

                </div>
            </section>
        </div>
    )
}

export default Home
