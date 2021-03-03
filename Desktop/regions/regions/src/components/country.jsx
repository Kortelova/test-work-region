import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCountryByRegionStart} from '../redux/regions/actions';
import {
	Title,
	ContainerCountries,
	CardCity,
	Sort
} from './styled';

const Country = ({region}) => {
	 const dispatch = useDispatch();
	 const [showInfo, setShowInfo] = React.useState({
	 	show: false,
	 	name: null
	 });

	 useEffect(() =>{
	 	dispatch(getCountryByRegionStart(region));
	 }, [region]);

	 let Countries = useSelector(state => state.countryList);

	 const sortByPopulation = (index) => {
	 	if(index === 0 ){
	 		Countries.sort((a,b) => a.population >= b.population ? 1 : -1);
	 	}
	 	if(index===1){
	 		Countries.sort((a,b) => a.population <= b.population ? 1 : -1);
	 	}
	 	return Countries;
	 };

	 const sortByName = (index) => {
	 	if(index===0){
	 		Countries.sort((a,b) => a.name >= b.name ? 1 : -1);
	 	}
	 	if(index===1){
	 		Countries.sort((a,b) => a.name <= b.name ? 1 : -1)
	 	}
	 }

	return(
		<div style={{background:'rgba(0, 0, 255, .4)', height:'100vh'}}> 
			<Title>Countries in the {region.toLowerCase()}</Title>
			<Sort>
				<label htmlFor="population-select" style={{paddingLeft:8}}>Sort by Population:</label>
				<select
					id='population-select'
					onChange={(e) => sortByPopulation(e.target.options.selectedIndex)}
				>
					<option value='asc'>ASC</option>
					<option value='desc'>DSC</option>
				</select>

				<label htmlFor="name-select" style={{paddingLeft:8}}>Sort by name:</label>
				<select
					id="name-select"
					onChange={(e) => sortByName(e.target.options.selectedIndex)}
				>
					<option>ASC</option>
					<option>DSC</option>
				</select>
			</Sort>
			<ContainerCountries>
				{Countries && Countries.map(el => {
				 	return (
				 		<li onClick={(e) => {
				 			setShowInfo({
				 				show: !showInfo.show,
				 				name: e.target.childNodes[0].data
				 			});
				 		}}
				 		>
				 			{el.name}
				 			
				 			{showInfo.show && showInfo.name === el.name ?
				 			(<CardCity>
				 				<img src={el.flag} alt="flag" style={{width: '30%', height:'35%'}}/>
				 				<div style={{paddingLeft:'20px'}}> 
				 					<p style={{margin:0}}>Subregion: {el.subregion}</p>
				 					<p> Population: {el.population}</p>
				 					<p>Capital: {el.capital} </p>
				 					<p>Area: {el.area} m²</p>
				 				</div>
				 			</CardCity>) : 
				 			null}
				 		</li>
				 	)})
			}
			</ContainerCountries>
		</div>
	)
}

export default Country;