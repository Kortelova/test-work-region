import styled from 'styled-components';
import background from '../assets/bckgrd.jpg';

export const Container = styled.div`
	background-image: url(${background});
	background-size: cover;
	width: 100%;
	height: 100vh;
	padding-top: 5%;
`;

export const Title = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	border-radius:8px;
	width: 40%;
	max-height: 60px;
	min-height: 40px;
	height: 100%;
	margin: 0 auto;
	font-size: 100%;
	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 255, .2);
`

export const ListRegion = styled.div`
	margin: 8px auto;
	background: white;
	max-height: 250px;
	height:100%;
	width: 40%;
	border-radius: 8px;
	padding-top: 10px;
`

export const Region = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	text-transform: uppercase;
	&:hover{
		border: 1px solid rgba(0, 0, 255, .4);
		border-radius: 8px;
		color:rgba(0, 0, 255, .4);
		letter-spacing: 2px;
		font-weight: 600;
	}
`

export const ContainerCountries = styled.ul`
	width: 37%;
	max-height: 550px;
	height:100%;
	overflow-y: scroll;
	margin: 15px auto;
	background:#fff;
	border-radius: 8px;
	&::-webkit-scrollbar { width: 0 }
	& li {
		padding: 6px 6px;
		&:hover{
			cursor: pointer;
		}
	}
`

export const CardCity = styled. div`
	width: 90%;
	height: 230px;
	border: 1px solid rgba(0, 0, 255, .4);
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 255, .2);
	border-radius: 5px;
	display: flex;
	padding: 10px 10px;
`

export const Sort = styled.div`
	margin: 10px auto;
	width: 40%;
	height: 30px;
	background: #fff;
	border-radius: 8px;
`