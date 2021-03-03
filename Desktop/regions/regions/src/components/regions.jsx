import React from 'react';
import {Container, Title, ListRegion, Region} from './styled.js';
import {Link} from "react-router-dom";

const Regions = ({setRegion}) => {
	let rgns = ['africa', 'americas', 'asia', 'europe', 'oceania'];

	return(
		<Container>
			<Title>Choose the region: </Title>
			<ListRegion>
				{rgns.map(el => <Link style={{textDecoration:'none', color:'black'}} to ='/country-list'><Region onClick={() => setRegion(el)}>{el}</Region></Link>)}
			</ListRegion>
		</Container>
		)
}

export default Regions;