import React from 'react'
import { Carousel } from 'antd';

import withBreakpoints from './../../../HOC/withBreakpoints'

import './MainSlider.scss'


const MainSlider = ({ sliderData, queryMatches }) => {
    return (
        <section className='main_slider' >
            <Carousel
                autoplay
                dots={false}
                arrows={true}
                autoplaySpeed={5000}
            >
                {sliderData.length && (
                    sliderData.map(({ id, imageUrlDesctop, imageUrlMobile }) => ( 
                        <div key={`main_slider_${id}`}>
                            {queryMatches && queryMatches.sm ? (
                                <img src={imageUrlMobile} alt="slider" />
                            ) : (
                                <img src={imageUrlDesctop} alt="slider" />
                            )}                            
                        </div>
                    ))
                )}
            </Carousel>
        </section>
    )
}

export default withBreakpoints(MainSlider, {
    sm: '(max-width: 420px)'
}); 
