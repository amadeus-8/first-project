import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls.js';
import {required, maxLengthCreator} from '../../utils/validators/validators.js';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'login'} name={'login'}
               component={Input}
               validate={[required]}
               />
      </div>
      <div>
        <Field placeholder={'password'} name={'password'}
               component={Input}
               validate={[required]}
               />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm/>
    </div>
  )
}

export default Login;
