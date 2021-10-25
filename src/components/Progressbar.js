import React from "react";
import useStorage from "../hooks/useStorage";

function Progressbar({ file, setFile }) {

    const { url, progress } = useStorage(file);

    console.log(progress, url);
    return (<div className='progress-bar'>progress</div>);
}


export default Progressbar;