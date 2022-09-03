/* eslint-disable import/first */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware =[thunk]
import reducer from './reducer';
import { createStore,applyMiddleware } from 'redux';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;