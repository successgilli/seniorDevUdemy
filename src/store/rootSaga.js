import { all } from 'redux-saga/effects';
import { watchSearchBox } from './modules/serchox';
import { watchRobots } from './modules/robots';

export default function* rootSaga() {
    yield all([
        watchSearchBox(),
        watchRobots()
    ])
};
