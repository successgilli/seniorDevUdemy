import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaModdleware = createSagaMiddleware();
const middlewares = [sagaModdleware];
const innitialState = {};
const enhancers = [];

// deelopment envioronment

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

if(typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function'){
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
}

middlewares.push(createLogger());

// end development

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    rootReducer,
    innitialState,
    composedEnhancers
    );

sagaModdleware.run(rootSaga);

export default store;
