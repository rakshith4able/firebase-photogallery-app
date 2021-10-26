import sizes from './sizes';


const styles = {
    Form: {
        margin: ' 30px auto 10px',
        textAlign: 'center',
        '& label': {
            display: 'block',
            width: ' 30px',
            height: ' 30px',
            border: '2px solid rgb(228,105,48)',
            borderRadius: '50%',
            margin: '10px auto',
            lineHeight: '30px',
            color: 'rgb(56, 62, 86)',
            fontWeight: 'bold',
            fontSize: '24px',
            '& input': {
                height: 0,
                width: 0,
                opacity: 0,
            },
            '&:hover': {
                background: 'rgb(228,105,48)',
                color: 'white',
                cursor: 'pointer'
            }

        },
    },
    Output: {
        height: '60px',
        fontSize: ' 0.8rem',
        margin: '20px 10%',
    },
    Error: {
        color: 'black',
    },
    [sizes.down("sm")]: {
        Form: {
            margin: 0,
        }, Output: {
            margin: '5px 10px'
        }
    },
}

export default styles;