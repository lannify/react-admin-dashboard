import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth_reducer';

export default combineReducers({
  auth,
  form: formReducer
});