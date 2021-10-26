import sizes from './sizes';

const styles = {
    ImageContainer: {
        margin: '20px 10%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridGap: '15px',
    },
    [sizes.down("lg")]: {
        ImageContainer: {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        }
    },
    [sizes.down("md")]: {
        ImageContainer: {
            gridTemplateColumns: '1fr 1fr 1fr',
            margin: '0 5px',
        }
    },
    [sizes.down("sm")]: {
        ImageContainer: {
            gridTemplateColumns: '1fr 1fr',
        }
    },
    [sizes.down("xs")]: {
        ImageContainer: {
            gridTemplateColumns: '1fr 1fr',
            gridGap: '5px'

        }
    },
};

export default styles;