import React, { useReducer } from 'react';
import { UserReducer, USER_REGISTER_INITIAL_STATE } from "../Reducers/UserReducer";
import axios from "axios";
import { LOGIN_USER } from "../../../utils/Constant";
import "./LoginComponent.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const LoginComponent = () => {

	const [userState, dispatch] = useReducer(UserReducer, USER_REGISTER_INITIAL_STATE);

	const handleChange = (e) => {
		dispatch({
			type: "CHANGE_INPUT",
			payload: { name: e.target.name, value: e.target.value, error: "" },
		});
	};
	const onSubmit = async (e) => {
		e.preventDefault();

		if (!userState.user.email) {
			return showError("Email Required");
		}
		if (!userState.user.password) {
			return showError("Password Required");
		}

		try {
			dispatch({
				type: "POST_USER",
				payload: { name: e.target.name, value: e.target.value, error: "" },
			});
			var result = await axios.post(LOGIN_USER, userState.user);
			window.location.href = "/";
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
			showError(error.response.data.error.message);
		}

	}
	return (
		<>
			<ToastContainer />
			<div className='login__container'>
				<form onSubmit={onSubmit}>
					<input type="text" value={userState.user.email} placeholder="Enter Email or Username  " name="email" required onChange={handleChange} />
					<input type="password" value={userState.user.password} placeholder="Enter Password" name="password" required onChange={handleChange} />
					<div className='buttons__container'>
						<button type="submit" className=''>Login</button>
						{/* <button type="button" className="" style={{}}>Cancel</button> */}
					</div>
					<div>
						<label>
							<input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
						</label>
						<span className="psw"> <a href='#'>Forgot password?</a></span>
					</div>
				</form>
			</div>
		</>
	)
}

export default LoginComponent