import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/index'
import routes from './routes'

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <div>Hello</div>
      <Router>
=======
      <Router>
        <Header />
>>>>>>> 0956407ba1d7845b9eb72f77d0ed866a6a3aeeb2
        <Switch>
          {routes.map(route => (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  )
}

export default App
