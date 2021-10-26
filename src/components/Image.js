import React from 'react';
import { withStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import styles from '../styles/ImageStyles';

function Image({ classes, src, setSelectedImage }) {
    return (
        <motion.div className={classes.Image}
            onClick={() => {
                setSelectedImage(src);
            }}
            whileHover={{ opacity: 1 }}
            layout
        >
            <motion.img src={src} alt='uplodaded pic' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
        </motion.div >
    );
}

export default withStyles(styles)(Image);