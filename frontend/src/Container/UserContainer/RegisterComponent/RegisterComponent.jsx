import React, { useReducer } from 'react';
import { UserReducer, USER_REGISTER_INITIAL_STATE } from "../Reducers/UserReducer";
import LoadingScreenComponent from "../../LoadingScreen/LoadingScreenComponent";
import "../LoginComponent/LoginComponent.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { REGISTER_USER } from "./../../../utils/Constant";

const showError = (message) => {
	toast.error(message, {
		position: "top-left",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,

	});
}

const showInfoMessage = (message) => {
	toast.info(message, {
		position: "top-left",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,

	});
}


const RegisterComponent = () => {

	const [userState, dispatch] = useReducer(UserReducer, USER_REGISTER_INITIAL_STATE);

	let navigation = useNavigate();

	const handleChange = (e) => {
		dispatch({
			type: "CHANGE_INPUT",
			payload: { name: e.target.name, value: e.target.value, error: "" },
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!userState.user.firstName) {
			showError("Please provide first name");
			return;
		}
		if (!userState.user.lastName) {
			showError("Please provide last name");
			return;
		}
		if (!userState.user.email) {
			showError("Please provide email");
			return;
		}
		if (!userState.user.password) {
			showError("Please provide password");
			return;
		}
		if (!userState.user.repeatPassword) {
			showError("Please provide repeat password");
			return;
		}
		if (!(userState.user.repeatPassword === userState.user.password)) {
			showError("Password doesn't matched");
			return;
		}
		if (!userState.user.phoneNumber) {
			showError("Please provide Phone Number");
			return;
		}

		try {
			dispatch({
				type: "POST_USER",
				payload: { name: e.target.name, value: e.target.value, error: "" },
			});

			await axios.post(REGISTER_USER, userState.user);
			showInfoMessage("Please login to continue");
			navigation("/login")
		} catch (error) {
			dispatch({
				type: "POST_USER_ERROR",
				payload: { name: e.target.name, value: e.target.value, },
			});
			showError(error.response.data.error.message
			);
		}
	}

	return (
		<div>
			<ToastContainer />
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
		</div >
	)
}

export default RegisterComponent