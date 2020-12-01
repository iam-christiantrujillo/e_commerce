import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CategoryInd from './views/CategoryInd'
import ProductInd from './views/ProductInd'

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

      </Switch>
    </Router>

   
  );
}

export default App;
