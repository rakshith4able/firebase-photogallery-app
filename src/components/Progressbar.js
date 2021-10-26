import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

function Progressbar({ file, setFile }) {

    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) { setFile(null); }
    }, [url])

    return (<div className='progress-bar' style={{ width: progress + '%', height: '5px', background: 'blue', marginTop: '20px' }}>
    </div>);
}


export default Progressbar;