import React, { useReducer, useContext } from 'react';
import { UserReducer, USER_REGISTER_INITIAL_STATE } from "../Reducers/UserReducer";
//import axios from "axios";
//import { LOGIN_USER } from "../../../utils/Constant";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Container/Context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';

import "./LoginComponent.css";

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
	const { login, currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	if (currentUser) {
		window.location.href = "/";
		return;
	}
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

			var result = await login(userState.user);
			if (result) {
				dispatch({
					type: "POST_USER_SUCCESS_FULLY",
					payload: userState.user,
					error: ""
				});
				navigate("/");
			}
			//var result = await axios.post(LOGIN_USER, userState.user);
			//window.location.href = "/";
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
				<div className='overlay__login'>
					<motion.form
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						onSubmit={onSubmit}
						autoComplete={false}
						className="form__container">
						<input type="text" value={userState.user.email} placeholder="Enter Email or Username  " name="email" required onChange={handleChange} />
						<input type="password" value={userState.user.password} placeholder="Enter Password" name="password" required onChange={handleChange} />
						<div className='buttons__container'>
							<motion.button
								type="submit"
								className=''
								whileHover={{ scale: 1.02 }}
								whileInView={{ opacity: [0.8, 1] }}
								transition={{ duration: 0.05, type: 'keyframes' }}
							>
								Login
							</motion.button>
							{/* <button type="button" className="" style={{}}>Cancel</button> */}
						</div>
						<div className='remmeber__me'>
							<label>
								<input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
							</label>
							<span className="psw"> <a href='#'>Forgot password?</a></span>
						</div>
					</motion.form>
				</div>
			</div>
		</>
	)
}

export default LoginComponent