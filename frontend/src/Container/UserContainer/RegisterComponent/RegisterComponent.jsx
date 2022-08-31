import React, { useReducer } from 'react';
import { UserReducer, USER_REGISTER_INITIAL_STATE } from "../Reducers/UserReducer";
import LoadingScreenComponent from "../../LoadingScreen/LoadingScreenComponent";
import "../LoginComponent/LoginComponent.css";
import axios from 'axios';

import { REGISTER_USER } from "./../../../utils/Constant";
const RegisterComponent = () => {

	const [userState, dispatch] = useReducer(UserReducer, USER_REGISTER_INITIAL_STATE);

	const handleChange = (e) => {
		dispatch({
			type: "CHANGE_INPUT",
			payload: { name: e.target.name, value: e.target.value, error: "" },
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!userState.user.firstName) {
			return alert("First Name Required");

		}
		if (!userState.user.lastName) {
			return alert("Last Name Required");
		}
		if (!userState.user.email) {
			return alert("Email Required");
		}
		if (!userState.user.password) {
			return alert("Password Required");
		}
		if (!userState.user.repeatPassword) {
			return alert("Repeat Password Required");
		}
		if (!(userState.user.repeatPassword === userState.user.password)) {
			return alert("Password doesn't matched");
		}
		if (!userState.user.phoneNumber) {
			return alert("Phone NUmber Required");
		}

		try {
			dispatch({
				type: "POST_USER",
				payload: { name: e.target.name, value: e.target.value, error: "" },
			});
			var result = await axios.post(REGISTER_USER, userState.user);
			dispatch({
				type: "POST_USER_SUCCESS_FULLY",
				payload: userState.user,
				error: ""
			});
		} catch (error) {
			dispatch({
				type: "POST_USER_ERROR",
				payload: { name: e.target.name, value: e.target.value, error: error },
			});
			alert(error);
		}

	}

	return (
		<div>
			{
				userState.loading && <LoadingScreenComponent></LoadingScreenComponent>
			}
			<div className='login__container'>
				<form onSubmit={onSubmit}>
					<input type="text" value={userState.user.firstName} placeholder="First Name" name="firstName" onChange={handleChange} />
					<input type="text" value={userState.user.lastName} placeholder="Last Name" name="lastName" onChange={handleChange} />
					<input type="text" value={userState.user.email} placeholder="Enter Email" name="email" onChange={handleChange} />
					<input type="text" value={userState.user.userName} placeholder="Enter UserName" name="userName" onChange={handleChange} />
					<input type="password" value={userState.user.password} placeholder="Enter Password" name="password" onChange={handleChange} />
					<input type="password" value={userState.user.repeatPassword} placeholder="Repeat Password" name="repeatPassword" onChange={handleChange} />
					<input type="tel" value={userState.user.phoneNumber} placeholder="Enter Phone Number" name="phoneNumber" onChange={handleChange} />
					<div className='buttons__container'>
						<button type="submit" className=''>Sign Up</button>
						{/* <button type="button" className="" style={{}}>Cancel</button> */}
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterComponent