import React from 'react'
import LoadingScreen from "react-loading-screen";
import Spinner from "../../assets/img/loading.gif";
const LoadingScreenComponent = () => {
	return (
		<div>
			<LoadingScreen loading={true} bgColor="#f1f1f1" logoSrc={Spinner} ></LoadingScreen>
		</div>
	)
}

export default LoadingScreenComponent;