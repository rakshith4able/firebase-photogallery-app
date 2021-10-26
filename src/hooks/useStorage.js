import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL, getMetadata } from 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);



    useEffect(() => {
        const storageRef = ref(projectStorage, file.name);
        let type;
        getMetadata(file)
            .then((metadata) => {
                type = metadata;
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            });
        const metadata = {
            contentType: type
        };

        const collectionRef = doc(collection(projectFirestore, "images"));;
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {
                setError(error);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setDoc(collectionRef, { url: downloadURL, createdAt: timeStamp() });
                    setUrl(downloadURL);
                });
            }
        );
    }, [file]);

    return { progress, url, error };
}

export default useStorage;

