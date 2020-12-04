import './App.css';
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
  Redirect
} from "react-router-dom";

import CategoryInd from './views/CategoryInd'
import ProductInd from './views/ProductInd'
import Login from './views/Login'
import Signup from './views/Signup'

const Logout = () => {
  window.localStorage.removeItem('token');
  return <Redirect to="/"/>
}

function App() {
  return (

    <Router>

      <Switch>

        <Route exact path ="/">
            <Home/>
        </Route>

        <Route exact path ="/category/:name">
            <CategoryInd/>
        </Route>

        <Route exact path ="/id/:idProduct">
            <ProductInd/>
        </Route>

        <Route exact path ="/login">
            <Login/>
        </Route>

        <Route exact path ="/signup">
            <Signup/>
        </Route>

        <Route exact path ="/logout">
            <Logout/>
        </Route>

      </Switch>
    </Router>

   
  );
}

export default App;
