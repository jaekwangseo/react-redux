import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/root-reducer';
import createLogger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(createLogger())
  ));

export default store


