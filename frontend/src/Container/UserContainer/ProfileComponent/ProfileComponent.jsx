import React, { useReducer, useContext } from 'react'
import "../LoginComponent/LoginComponent.css";
import { UserReducer, USER_REGISTER_INITIAL_STATE } from "../Reducers/UserReducer";
import axios from 'axios';
import LoadingScreenComponent from '../../LoadingScreen/LoadingScreenComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UPDATE_PROFILE } from "./../../../utils/Constant";
import { UserContext } from '../../..';
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

const ProfileComponent = () => {
	const userData = useContext(UserContext);
	USER_REGISTER_INITIAL_STATE.user = userData;
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
			return showError("Please provide first name");
		}
		if (!userState.user.lastName) {
			return showError("Please provide last name");
		}
		if (!userState.user.email) {
			return showError("Please provide email");
		}
		if (!userState.user.phoneNumber) {
			return showError("Please provide Phone Number");
		}

		try {
			dispatch({
				type: "POST_USER",
				payload: { name: e.target.name, value: e.target.value, error: "" },
			});

			await axios.post(UPDATE_PROFILE, userState.user);
			showInfoMessage("Please login to continue");
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
		<>
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
					<input type="tel" value={userState.user.phoneNumber} placeholder="Enter Phone Number" name="phoneNumber" onChange={handleChange} />
					<div className='buttons__container'>
						<button type="submit" className=''>Update</button>
						{/* <button type="button" className="" style={{}}>Cancel</button> */}
					</div>
				</form>
			</div>
		</>
	)
}

export default ProfileComponent