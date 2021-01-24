import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";
import './App.css';
//import MouseTracker from './components/MouseTracker';
import Auth from './components/Auth';
import { fakeAuth } from './components/Auth';
import NestedRoute from './components/NestedRoute';

function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/mfa/asset">Asset</Link>
          </li>
          <li>
            <Link to="/mfa/asset/ghyuo-adgahd-ghghg">Asset Detail</Link>
          </li>
          <li>
            <Link to="/mfa/patch">Patch</Link>
          </li>
          <li>
            <Link to="/2f/cr">2fCr</Link>
          </li>
          <li>
            <Link to="/2f/cr/remove_user/onkar">Remove User</Link>
          </li>
          <li>
            <Link to="/2f/cr/add_user/onkar">Add User</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/auth" component={Auth} />
        <AuthRoute path="/mfa/asset" component={Asset} />
        <AuthRoute path="/mfa/patch" component={Patch} />
        {<AuthRoute path="/2f/cr" component={NestedRoute} />}
      </div>
    </Router>
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Patch() {
  return <h3>Patch</h3>;
}

function Asset() {
  return <h3>Asset</h3>;
}

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        JSON.parse(localStorage.getItem('isAuthenticated')) ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/auth',
              state: { from: props.location }
            }} />
          )
      }
    />
  );
}

const AuthButton = withRouter(
  ({ history }) =>
    JSON.parse(localStorage.getItem('isAuthenticated')) ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);

export default App;
