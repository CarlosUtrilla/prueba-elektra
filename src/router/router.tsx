import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom"
import { Employees } from '../pages/Employees/Employees';
import { Login } from '../pages/Login/Login';
import { Route404 } from '../pages/route404/route404';
import { PrivateRouter } from './PrivateRouter';
const Router = () => {
  return (
      <HashRouter>
        <Switch>
          <Route path='/' exact>
             <Login />
          </Route>
          <PrivateRouter path='/employees/' exact>
            <Employees />
          </PrivateRouter>
          <Route path="*" exact>
             <Route404/>
          </Route>
        </Switch>
      </HashRouter>
  )
}

export default Router;