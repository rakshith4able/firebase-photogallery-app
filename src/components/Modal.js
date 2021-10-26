import React from 'react';
import { withStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import styles from '../styles/ModalStyles';

function Modal({ classes, selectedImage, setSelectedImage }) {

    const handleClick = (e) => {
        setSelectedImage(null);
    }
    return (
        <motion.div className={classes.Modal} onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.img src={selectedImage} alt='enlarged pic' initial={{ y: "-100vh" }} animate={{ y: 0 }} />
        </motion.div >
    );
}

export default withStyles(styles)(Modal);