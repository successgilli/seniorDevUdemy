import { takeLatest, call, put } from 'redux-saga/effects';

import { SUCCESS_ROBOTS, FAILED_ROOTS, GET_ROBOTS} from './action';
import request from './request';

const { fetchRobots } = request;

export const getRobots = () => ({type: GET_ROBOTS, payload: ''})

function* workerRobots(){
    const response = yield call(fetchRobots)

    if(typeof response === 'string') yield put({ type: FAILED_ROOTS })
    else yield put({ type: SUCCESS_ROBOTS, payload: response })
};

export function* watchRobots() {
    yield takeLatest(GET_ROBOTS, workerRobots);
};

const initialState = {
    initial: [],
    failure: false,
    pending: false
};

export default (state=initialState, action={}) => {
    switch(action.type){
        case SUCCESS_ROBOTS:
            return {
                ...initialState,
                initial: action.payload
            };
        case GET_ROBOTS:
            return {
                ...state,
                pending: true

            };
        case FAILED_ROOTS:
            return {
                ...initialState,
                failure: true
            };
        default:
            return state
    }
};
