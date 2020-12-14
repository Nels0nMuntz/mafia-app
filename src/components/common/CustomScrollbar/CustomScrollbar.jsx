import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import './CustomScrollbar.scss'


const CustomScrollbar = props => {

    const renderThumb = props => {
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
    const renderTrack = props => {

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

    return (
        <Scrollbars
            className="menu__custom_scrollbar"
            // renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
            renderTrackVertical={renderTrack}
            // renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
            renderThumbVertical={renderThumb}
        // renderView={props => <div {...props} className="view"/>}
        >
            {props.children}
        </Scrollbars>
    )
}

export default CustomScrollbar
