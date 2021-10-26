import React from 'react';
import { withStyles } from '@mui/styles';
import { motion } from 'framer-motion';

const styles = {

    Image: {
        overflow: 'hidden',
        height: 0,
        padding: '50% 0',
        position: 'relative',
        opacity: 0.8,
        '& img': {
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '150%',
            position: 'absolute',
            top: 0,
            left: 0,
        }

    }
};

function Image({ classes, src, setSelectedImage }) {
    return (
        <motion.div className={classes.Image}
            onClick={() => {
                setSelectedImage(src);
            }}
            whileHover={{ opacity: 1 }}
            layout
        >
            <motion.img src={src} alt='uplodaded pic' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        </motion.div >
    );
}

export default withStyles(styles)(Image);