import React, { useState } from "react";

function UploadForm() {
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

    return (<form>
        <input type="file" onChange={handleChange} />
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div className='file'>{file.name}</div>}
        </div>
    </form>);
}

export default UploadForm;