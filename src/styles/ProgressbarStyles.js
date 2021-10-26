import sizes from './sizes';

const styles = {
    ProgressBar: {
        height: '5px',
        background: 'rgb(56, 62, 86)',
        marginTop: '20px',
    },
    [sizes.down("sm")]: {
        ProgressBar: {
            marginTop: '5px',
        }
    },
};

export default styles;