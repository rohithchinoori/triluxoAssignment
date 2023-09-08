import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import BlogPage from './components/BlogPage'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/blog" component={BlogPage} />
    <Route exact path="/blogs/:id" component={BlogItemDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
