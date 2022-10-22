import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { Gallery } from './components/Gallery/Gallery';
import "./Uplodas.scss"

const fileTypes = ["JPEG", "PNG", "JPG"];
export const Upload = () => {
    const [file, setFile] = useState<any[]>([]);
    const handleChange = (file: any) => {
        const reader = new FileReader();

        reader.readAsDataURL(file[0]);
        reader.onloadend = (e) => {
            e.preventDefault();
            setFile(files => [...files, e.target?.result!]);
        }
    };
  return (
    <div className='uploads'>
        <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            classes="drag-and-drop"
            label="Arrastra tus archivos y sueltalos aquí"
            hoverTitle="Suelta aquí"
        />
        <Gallery files={file} />
    </div>
  )
}
