import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { mergeClasses, withStyles } from "@mui/styles";
import { animate, motion } from "framer-motion";
import styles from '../styles/ProgressbarStyles';

function Progressbar({ file, setFile, classes }) {

    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) { setFile(null); }
    }, [url])

    return (<motion.div className={classes.ProgressBar} initial={{ width: 0 }} animate={{ width: progress + '%' }}>
    </motion.div>);
}


export default withStyles(styles)(Progressbar);