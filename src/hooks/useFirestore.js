import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

function useFirestore(collectionName) {
    const [docs, setDocs] = useState([]);

    let getDocuments = async () => {
        const q = query(collection(projectFirestore, collectionName), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
        });





    };

    useEffect(() => {
        console.log('useEffect in useFireStore...');
        let unsub = getDocuments();

        return () => unsub();
    }, [collectionName]);

    return { docs };
}

export default useFirestore;