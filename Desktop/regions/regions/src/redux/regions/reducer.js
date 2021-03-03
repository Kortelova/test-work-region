import {GET_COUNTRY_START, GET_COUNTRY_SUCCESS} from './types';

let initialState = {
	countryList: null,
}

export default function(state = initialState, action){
	switch (action.type){
		case GET_COUNTRY_START:
			return state;

		case GET_COUNTRY_SUCCESS:
			return{
				...state,
				countryList: action.payload
			}

		default:
		return state;
	}
}