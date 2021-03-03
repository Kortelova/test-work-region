import {
	GET_COUNTRY_START,
	GET_COUNTRY_SUCCESS
	} from './types';

export const getCountryByRegionStart = (payload) => {
return {
	type: GET_COUNTRY_START,
	payload
}};

export const getCountryByRegionSuccess = (payload) => ({
	type: GET_COUNTRY_SUCCESS ,
	payload
})