import React from 'react';

import { withStyles } from '@mui/styles';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '10vh',
        alignItems: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '100',
        color: 'rgb(0,138,216)',
        borderBottom: '1px solid rgb(211,211,211)'
    },
};

function Header({ classes }) {

    return (<header className={classes.root}>
        <h1>FIRE GALLERY</h1>
    </header>);
}

export default withStyles(styles)(Header);