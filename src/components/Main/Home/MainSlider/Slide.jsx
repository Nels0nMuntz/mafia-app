import React from 'react'
import url from '../../../../assets/images/main-slider/slide_1.jpeg'

const { red } = require('@material-ui/core/colors');
const { withStyles } = require('@material-ui/core/styles');


const Slide = () => {

    const styles = {
        root: {
            backgroundColor: red[600],
            height: 400,
            width: 800
        },
        media: {
            backgroundColor: red[400]
        }
    }

    const StyledSlide = withStyles(styles)(Slide);


    return (
        <StyledSlide
            media={<img src={url} alt='slider' />}
            title='This is a very cool feature'
            subtitle='Just using this will blow your mind.'
        />
    )
}

export default Slide
