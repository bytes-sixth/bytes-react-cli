import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'antd/dist/antd.css';
import routes from './routes'

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App
