import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { setMainSlider } from '../../../../redux/home-reducer';
import withBreakpoints from './../../../HOC/withBreakpoints'

import './MainSlider.scss'
import url from '../../../../assets/images/main-slider/slide_1.jpeg'


const MainSlider = ({queryMatches}) => {

    const sliderData = useSelector(state => state.home.mainSlider);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setMainSlider())
    }, []);

    return (
        <div className='main_slider' >

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
        </div>
    )
}

export default withBreakpoints(MainSlider, {
    sm: '(max-width: 420px)'
}); 
