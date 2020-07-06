import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login/index';
import User from './components/userDetails/index';
import { routes } from '../src/routes/routes';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();   

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Login} ></Route>
          <Route path="/login" exact component={Login} ></Route>
          <Route path="/user" exact  render={(props) => <User {...props}/>}></Route>
        </Switch>
      </Router>
      {/* <Login/> */}
    </div>
  );
}

export default App;
