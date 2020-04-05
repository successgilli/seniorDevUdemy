import { takeLatest, put } from 'redux-saga/effects';

import { SEARCH_NAME, INITIATE_SEARCH } from './action.js';

export const initiatSearch = (payload='') => ({ type: INITIATE_SEARCH, payload });
const updateSearchVal = (payload) => ({type: SEARCH_NAME, payload})

function* workerSearch (action) {
    yield put(updateSearchVal(action.payload));
};

export function* watchSearchBox () {
    yield takeLatest(INITIATE_SEARCH, workerSearch)
};

const initialState = {
    name: ''
};

export default (state=initialState, action = {}) => {
    switch(action.type){
        case SEARCH_NAME:
            return {
                name: action.payload
            };
        default:
            return state
    };
};
