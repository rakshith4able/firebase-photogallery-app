const styles = {
    Image: {
        overflow: 'hidden',
        height: 0,
        padding: '50% 0',
        position: 'relative',
        opacity: 0.8,
        '& img': {
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
};

export default styles;