import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

class SignInForm extends React.Component {
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <Form onSubmit={handleSubmit}>    
          <div className='form-group'>
            <Field
              label='Email'
              placeholder='john@doe.com'
              name='email'
              type='email'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field 
              label='Password'
              placeholder='*********'
              name='password'
              type='password'
              component={renderField}
            />
          </div>

          <Button
            disabled={submitting}
            className='btnCommon btnPrimary'
            type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Minimum 6 characters';
  }

  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
    {touched && (error && <p className='error'>{error}</p>)}
  </div>
)

SignInForm = reduxForm({
  form: 'SignInForm',
  validate
})(SignInForm);

export default SignInForm;