import sizes from './sizes';

const styles = {
    root: {
        display: 'flex',
        backgroundColor: 'rgb(252,245,241)',
        justifyContent: 'center',
        height: '10vh',
        alignItems: 'center',
        fontFamily: "'Montserrat', sans-serif",
        margin: '0 10%',
        fontWeight: '100',
        '& h1': {
            color: 'rgb(228,105,48)',
            '& span': {
                color: 'rgb(56, 62, 86)',
            }
        }
    },
    [sizes.down("md")]: {
        root: {
            margin: 0,
        }
    },
    [sizes.down("sm")]: {

    },
    [sizes.down("xs")]: {

    },
};

export default styles;