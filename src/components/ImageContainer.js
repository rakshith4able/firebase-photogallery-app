import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Image from './Image';
import { withStyles } from '@mui/styles';
import styles from '../styles/ImageContainerStyles';

function ImageContainer({ classes, setSelectedImage }) {
    const { docs } = useFirestore('images');
    return (<div className={classes.ImageContainer}>
        {docs && docs.map(doc => (
            <Image src={doc.url} setSelectedImage={setSelectedImage} key={doc.id} />
        ))}
    </div>);
}

export default withStyles(styles)(ImageContainer);