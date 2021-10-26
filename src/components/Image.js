import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {

    Image: {
        overflow: 'hidden',
        height: '0',
        padding: '50% 0',
        position: 'relative',
        opacity: '0.8',
        '& img': {
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '150%',
            position: 'absolute',
            top: '0',
            left: '0',
        }

    }
};

function Image({ classes, src }) {
    return (
        <div className={classes.Image} >
            <img src={src} alt='uplodaded pic' ></img>
        </div >
    );
}

export default withStyles(styles)(Image);