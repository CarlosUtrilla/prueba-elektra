import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom"
import { Employees } from '../pages/Employees/Employees';
import { Login } from '../pages/Login/Login';
import { Route404 } from '../pages/route404/route404';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
const Router = () => {
  return (
      <HashRouter>
        <Switch>
          <PublicRoute path='/' exact>
             <Login />
          </PublicRoute>
          <PrivateRoute path='/employees/' exact>
            <Employees />
          </PrivateRoute>
          <Route path="*" exact>
             <Route404/>
          </Route>
        </Switch>
      </HashRouter>
  )
}

export default Router;