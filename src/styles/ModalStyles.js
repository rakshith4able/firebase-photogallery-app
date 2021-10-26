const styles = {
    Modal: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        '& img': {
            maxWidth: '60%',
            maxHeight: '80%',
            boxShadow: '3px 5px 7px rgba(0,0,0,0.5)',
            border: '3px solid white',
        }
    }
};

export default styles;