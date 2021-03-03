export const getCountryRequest = (region) =>{
	let data = fetch(`https://restcountries.eu/rest/v2/region/${region}`)
	.then(res => res.json());

	return data;
}