import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import 'antd/dist/antd.css';
import Header from './components/header/index'
import routes from './routes'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {routes.map(route => (
              <Route exact key={route.path} path={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Router>
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
