import React from 'react'
import "./Gallery.scss"

export const Gallery = ({ images }:{images:string[]}) => {
  return (
      <div className='gallery'>
          {
              images.map((image, index) => (
                  <img src={image} key={index}/>
              ))
          }
    </div>
  )
}
