import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import { IPrivateRouter } from './interface';


export const PrivateRoute = ({ children, path, exact }: IPrivateRouter) => {
  const {logginState} = useContext(AuthContext)
    return (
        (logginState.logged) ?
            <Route path={path} exact={exact}>
                {children}
            </Route>
            : <Redirect to="/" />
    )
}
