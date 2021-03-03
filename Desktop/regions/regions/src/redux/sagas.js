import {  put, takeEvery } from 'redux-saga/effects'
import {GET_COUNTRY_START} from './regions/types';
import {fetchRegions} from './regions/saga';

function* SagaWorker() {
  yield takeEvery(GET_COUNTRY_START, fetchRegions);
}

export default SagaWorker;