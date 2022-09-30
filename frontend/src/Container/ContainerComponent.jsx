import React from 'react';
import "./ContainerComponent.css";
import HeroContainer from './HeroContainer/HeroContainer';
const ExerciseContainer = React.lazy(() => import('../Container/ExerciseContainer/ExerciseContainer'));
const ContainerComponent = () => {
	return (
		<>
			{/* <HeroContainer></HeroContainer> */}
			{/* <ExerciseContainer></ExerciseContainer> */}
		</>
	)
}


export default ContainerComponent;