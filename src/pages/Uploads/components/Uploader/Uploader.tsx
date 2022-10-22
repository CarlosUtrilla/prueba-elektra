import { Button } from '@mui/material';
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { setImages, UploadImageResponse } from '../../../../services/uploads';
import { Slider } from '../Slider/Slider'

const fileTypes = ["JPEG", "PNG", "JPG"];
export const Uploader = ({ onSubmit }: { onSubmit: (message: UploadImageResponse) => void }) => {
    const [file, setFile] = useState<any[]>([]);
    const handleChange = (file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onloadend = (e) => {
            e.preventDefault();
            setFile(files => [...files, e.target?.result!]);
        }
    };
    const handleSubmit = () => {
        setImages(file).then((response) => {
            onSubmit(response)
        })
    }
  return (
    <>
        <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            classes="drag-and-drop"
            label="Arrastra tus archivos y sueltalos aquí"
            hoverTitle="Suelta aquí"
          />
          {
              file.length > 0 &&
                <Button
                      variant='contained'
                      onClick={handleSubmit}
                >
                    Subir imagen{file.length > 1 ? "es" : ""}
                </Button>
          }
        <Slider files={file} />
    </>
  )
}
