import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import './CustomScrollbar.scss'


const CustomScrollbar = props => {

    const renderThumbVertical = props => {
        const style = {
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '565px',
            transform: 'translateY(0px)',
            cursor: 'pointer',
            borderRadius: '0',
            backgroundColor: 'var(--green-100)',
        };
        return (
            <div
                {...props}
                className="thumb-vertical"
                style={style}
            />
        )
    };
    const renderTrackVertical = props => {

        const style = {
            position: 'absolute',
            width: '6px',
            right: '0px',
            bottom: '0px',
            top: '0px',
            borderRadius: '0px',
            backgroundColor: 'var(--gray-100)',
        }

        return (
            <div
                {...props}
                style={style}
            />
        )
    }
    const renderThumbHorizontal = props => {
        const style = {
            position: 'relative',
            display: 'block',
            width: '280px',
            height: '100%',
            transform: 'translateX(110.736px);',
            cursor: 'pointer',
            borderRadius: '0',
            backgroundColor: 'var(--green-100)',
        };
        return (
            <div
                {...props}
                className="thumb-vertical"
                style={style}
            />
        )
    };
    const renderTrackHorizontal = props => {

        const style = {
            position: 'absolute',
            height: '6px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            borderRadius: '0px',
            backgroundColor: 'var(--gray-100)',
        }

        return (
            <div
                {...props}
                style={style}
            />
        )
    }

    return (
        <Scrollbars
            className="menu__custom_scrollbar"
            renderTrackHorizontal={renderTrackHorizontal}
            renderTrackVertical={renderTrackVertical}
            renderThumbHorizontal={renderThumbHorizontal}
            renderThumbVertical={renderThumbVertical}
            hideTracksWhenNotNeeded={true}
        >
            {props.children}
        </Scrollbars>
    )
}

export default CustomScrollbar
