import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import 'antd/dist/antd.css';
import Header from './components/header/index'
import routes from './routes'
import { NavProvider } from './context/useNavContext'

const App = () => {
  return (
    <>
      <Router>
        <NavProvider>
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
        </NavProvider>
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
