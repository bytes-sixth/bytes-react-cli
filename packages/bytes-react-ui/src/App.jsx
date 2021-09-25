import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import routes from './routes'

const App = () => {
  return (
    <>
      <div>Hello</div>
    </>
  )
}

export default App

/*
<Router>
  <Switch>
    {routes.map(route => (
      <Route exact key={route.path} path={route.path}>
        <route.component />
      </Route>
    ))}
  </Switch>
</Router>
*/
