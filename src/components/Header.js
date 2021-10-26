import React from 'react';

import { withStyles } from '@mui/styles';
import styles from '../styles/HeaderStyles';

function Header({ classes }) {

    return (<header className={classes.root}>
        <h1>FIRE <span> GALLERY</span></h1>
    </header>);
}

export default withStyles(styles)(Header);