import React, { useState } from "react";
import Progressbar from "./Progressbar";
import { withStyles } from "@mui/styles";
import styles from "../styles/UploadFormStyles";
function UploadForm({ classes }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };

    return (
        <form className={classes.Form}>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>

            <div className={classes.Output}>
                {error && <div className={classes.Error}>{error}</div>}
                {file && <div className='file'>{file.name}</div>}
                {file && <Progressbar file={file} setFile={setFile} />}
            </div>
        </form>);
}

export default withStyles(styles)(UploadForm);