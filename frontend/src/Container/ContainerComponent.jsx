import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./ContainerComponent.css";
import HeroContainer from './HeroContainer/HeroContainer';
import NavComponent from './NavContainer/NavComponent';
const ContainerComponent = () => {
	return (
		<>
			<Container fluid className='hero'>
				<NavComponent></NavComponent>
				<HeroContainer></HeroContainer>
			</Container>
		</>
	)
}


export default ContainerComponent;