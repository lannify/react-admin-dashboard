import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';

import { signIn } from '../../actions';

import NavBar from '../NavBar';
import SignInForm from './SignInForm';

class SignIn extends React.Component {

  state = { loading: false, error: '' };

  onSubmit = (values) => {
    this.setState({ loading: true });
    this.props.signIn(values);
  }

  componentWillReceiveProps(nextProps) {
    const { loggedIn } = nextProps.auth;
    
    if (!loggedIn) {
      this.setState({ error: nextProps.auth.error });
    }
  }

  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  render() {
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Sign In</h1>
              <Divider />
              {this.renderError()}
              <SignInForm onSubmit={this.onSubmit} />
            </Card>
          </div>
        </div>     
      </div>
    );  
  }
}

const mapStateToProps = state => ({
  form: state.form,
  auth: state.auth
})

export default connect(mapStateToProps, { signIn } )(SignIn);