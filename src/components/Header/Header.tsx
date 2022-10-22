import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import "./Header.scss"

export const Header = () => {
    const { logginState, logout } = useContext(AuthContext)
    const location = useLocation()
    const menu = [
        {
                label: 'Empleados',
                link: '/employees',
        },
        {
                label: 'Imagenes',
                link: '/upload',
        },
    ]
  return (
    <header className='header'>
        <nav>
                {
                    logginState.logged && menu.map((m, i) => (
                        <Link to={m.link} key={i} className={location.pathname === m.link ? "active": ""}>
                            {m.label}
                        </Link>
                    )
                    )
              }
              {
                  logginState.logged && <a className='logout' href="#" onClick={logout}>Cerrar Sesión</a>
              }
        </nav>
    </header>
  )
}
