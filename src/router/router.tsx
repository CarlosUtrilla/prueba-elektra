import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom"
import { Header } from '../components/Header/Header';
import { Employees } from '../pages/Employees/Employees';
import { Login } from '../pages/Login/Login';
import { Route404 } from '../pages/route404/route404';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Upload } from '../pages/Uploads/Upload';
const Router = () => {
  return (
    <HashRouter>
        <Header/>
        <Switch>
          <PublicRoute path='/' exact>
             <Login />
          </PublicRoute>
          <PrivateRoute path='/employees/' exact>
            <Employees />
          </PrivateRoute>
          <PrivateRoute path='/upload/' exact>
            <Upload />
          </PrivateRoute>
          <Route path="*" exact>
             <Route404/>
          </Route>
        </Switch>
      </HashRouter>
  )
}

export default Router;