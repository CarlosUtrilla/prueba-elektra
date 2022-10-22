import { Button, ButtonGroup } from '@mui/material';
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Gallery = ({ files }: { files: any[] }) => {
    const container = useRef<HTMLDivElement>(null);
    const list = useRef<HTMLDivElement>(null);

    const [selectedImg, setselectedImg] = useState(0)
    console.log(selectedImg)
  return (
   <div className='gallery'>
        <div className='gallery-slider' ref={container}>
            <div className='gallery-items' ref={list}>
                {
                      files && files.map((f, i) => (
                        i === selectedImg ?
                              <img src={f} alt="" key={i} />
                              : null
                    ))
                }
            </div>
        </div>
          {
              files.length > 1 &&
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button
                            startIcon={<KeyboardArrowLeftIcon />}
                            onClick={() => setselectedImg(c => c - 1)}
                            disabled={selectedImg <= 0}
                        >
                            Anterior
                        </Button>
                         <Button
                            endIcon={<KeyboardArrowRightIcon />}
                            onClick={() => setselectedImg(c => c + 1)}
                            disabled={selectedImg >= files.length - 1}
                    >
                            Siguiente
                    </Button>
                </ButtonGroup>
          }
   </div>
  )
}
