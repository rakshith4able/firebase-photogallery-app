import React from 'react';
import { withStyles } from '@mui/styles';
import { motion } from 'framer-motion';
const styles = {
    Modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        '& img': {
            display: 'block',
            maxWidth: '60%',
            maxHeight: '80%',
            margin: '60px auto',
            boxShadow: '3px 5px 7px rgba(0,0,0,0.5)',
            border: '3px solid white',

        }
    }
};

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