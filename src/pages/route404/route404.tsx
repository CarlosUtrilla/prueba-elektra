import React from 'react'
import {Link} from "react-router-dom"
export const Route404 = () => {
  return (
      <div>
          <h2>Upss!</h2>
          <h4>No pudimos encontrar esta página</h4>
          <Link to="/">Volver al inicio</Link>
    </div>
  )
}
