import React, { useState, useEffect } from 'react'
import { Alert, Button, Snackbar } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Uplodas.scss"
import { getImages, UploadImageResponse } from '../../services/uploads';
import { Uploader } from './components/Uploader/Uploader';
import { Gallery } from './components/Gallery/Gallery';


export const Upload = () => {
    const [images, setImages] = useState<string[]>([])
    const [uploadImages, setUploadImages] = useState(false)
    const [successMessage, setSuccessMessage] = useState<UploadImageResponse>()

    useEffect(() => {
       downloadImages()
    }, [])
    const downloadImages = () => {
        getImages().then((resp) => {
            setImages(resp)
        })
    }
    const onSubmit = (message: UploadImageResponse) => {
        setUploadImages(false)
        setSuccessMessage(message)
        downloadImages()
    }
  return (
    <div className='uploads'>
        {
            !uploadImages && images.length > 0?
                <div className='gallery-container'>
                    <Button startIcon={<AddCircleIcon/>} variant='contained' onClick={() => setUploadImages(true)}>Subir imágenes</Button>
                    <Gallery images={images} />
                </div> :
                  <Uploader onSubmit={ onSubmit } />
          }
        <Snackbar open={Boolean(successMessage)} autoHideDuration={6000} onClose={() => setSuccessMessage(undefined)}>
            <Alert onClose={() => setSuccessMessage(undefined)} severity={successMessage === UploadImageResponse.success  ? "success" : "warning" } sx={{ width: '100%' }}>
                {successMessage}
            </Alert>
      </Snackbar>
    </div>
  )
}
