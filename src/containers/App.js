import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { Loader } from 'semantic-ui-react';

import { firebaseConfig } from '../config';

import Home from './Home';
import Dashboard from './Dashboard';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';


const ProtectedRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => authed === true 
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/signIn', state: { from: props.location }}} />}
    />
  );
}

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => authed === false 
      ? <Component {...props} />
      : <Redirect to='/dashboard' />}
    />
  );
}

class App extends React.Component {

  state = { loggedIn: false, loading: true }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({ loggedIn: true, loading: false });
      } else {
        this.setState({ loggedIn: false, loading: false });
      }
    });
  }

  render()  {
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <div>
          <Route exact path='/welcome' component={Home} />
          <PublicRoute authed={this.state.loggedIn} path='/signIn' component={SignIn} />
          <PublicRoute authed={this.state.loggedIn} path='/signUp' component={SignUp} />
          <ProtectedRoute authed={this.state.loggedIn} path='/' component={Dashboard} />           
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

/**
 *  withRouter is a HOC to work around the issue of connect() conflict 
 *  with the current version of React Router.
 *  This might change in future releases
 */

export default withRouter(connect(mapStateToProps)(App));