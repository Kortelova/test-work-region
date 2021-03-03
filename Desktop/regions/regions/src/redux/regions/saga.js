import { call, put } from 'redux-saga/effects'
import { getCountryRequest } from '../services/region';
import {getCountryByRegionSuccess} from './actions';

export function* fetchRegions(action) {
   try {
      const regions = yield call(getCountryRequest, action.payload);
      yield put(getCountryByRegionSuccess(regions));
   } catch (e) {
      console.log(e);
   }
}