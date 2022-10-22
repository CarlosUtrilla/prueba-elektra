
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage as GetStorageInit, listAll, ref, uploadString } from 'firebase/storage';
import { generateID } from '../utils';

const uri = import.meta.env.VITE_BUCKET_FIREBASE;

export enum UploadImageResponse{
    success = "Todas las imágenes fueron subidas con exito.",
    notSatisfy = "Ocurrió un error al cargar algunas imágenes."
}

export const firebaseConnection = () => {

    const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG;

    const app = initializeApp(firebaseConfig);
    return app;
}

export const getStorage = () => {
    const app = firebaseConnection()

    const storage = GetStorageInit(app);
    return storage;
}

export const getImages = () => {
    const storage = getStorage();
    const starsRef = ref(storage, uri);
    return new Promise<string[]>((resolve) => {
        listAll(starsRef)
        .then((res) => {
            const promises = res.items.map((itemRef) => {
                // All the items under listRef.
                return new Promise<string>((resolve) => {
                    getDownloadURL(ref(storage, "gs://prueba-elektra.appspot.com/" + itemRef.fullPath)).then((res) => {
                        resolve(res)
                    })
                })
            });
            Promise.all(promises).then((res) => {
                resolve(res)
            })
        })
    })
}

export const setImages = (files: any[]) => {
    return new Promise<UploadImageResponse>((resolve) => { 
        const storage = getStorage();
        const uploadFiles = files.map((file) => {
            return new Promise<boolean>((resolve) => {
                const storageRef = ref(storage, uri+generateID());
                uploadString(storageRef, file, 'data_url')
                    .then(() => resolve(true))
                    .catch(() => resolve(false));
            })
        })
        Promise.all(uploadFiles).then((results) => {
            if (results.every(success => success)){
                resolve(UploadImageResponse.success)
            } else {
                 resolve(UploadImageResponse.notSatisfy)
            }
        })
    })
}