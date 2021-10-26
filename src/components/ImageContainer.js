import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Image from './Image';
import { withStyles } from '@mui/styles';

const styles = {
    ImageContainer: {
        margin: '20px auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '40px',
    },
    ImageWrap: {
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
    },
};

function ImageContainer({ classes }) {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (<div className={classes.ImageContainer}>
        {docs && docs.map(doc => (
            // <div className={classes.ImageWrap} key={doc.id}>
            //     <img src={doc.url} alt='uplodaded pic'></img>
            // </div>

            <Image src={doc.url} key={doc.id} />
        ))}
    </div>);
}

export default withStyles(styles)(ImageContainer);