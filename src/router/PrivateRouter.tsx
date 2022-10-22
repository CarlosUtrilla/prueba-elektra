import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

interface IPrivateRouter {
    children: React.ReactNode,
    path: string,
    exact: boolean
}

export const PrivateRouter = ({ children, path, exact }: IPrivateRouter) => {
  const {logginState} = useContext(AuthContext)
    return (
        (logginState.logged) ?
            <Route path={path} exact={exact}>
                {children}
            </Route>
            : <Redirect to="/" />
    )
}
