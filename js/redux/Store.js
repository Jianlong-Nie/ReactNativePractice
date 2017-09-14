import Reducer from './Reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({});
const store = createStore(Reducer,applyMiddleware(logger, thunk));

export default store;
