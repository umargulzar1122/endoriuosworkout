import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { LOGIN_USER, GET_LOGGED_IN_USER, LOGOUT_USER } from "./../../utils/Constant";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	const login = async (inputs) => {
		try {
			var { user } = await (await axios.post(LOGIN_USER, inputs)).data;
			console.log("🚀 ~ file: AuthContext.js ~ line 12 ~ login ~ user", user)
			debugger
			setCurrentUser(user);
			return true;
		} catch (error) {
			console.log("🚀 ~ file: AuthContext.js ~ line 17 ~ login ~ error", error)
		}
		return false;
	};

	const logout = async (inputs) => {
		await axios.get(LOGOUT_USER);
		setCurrentUser(null);
	};

	useEffect(() => {
		getLoggedInUser();
	}, []);

	const getLoggedInUser = async () => {
		try {
			var { user } = await (await axios.get(GET_LOGGED_IN_USER)).data;
			console.log("🚀 ~ file: AuthContext.js ~ line 33 ~ getLoggedInUser ~ user", user);
			setCurrentUser(user);
		} catch (error) {
			console.log("🚀 ~ file: AuthContext.js ~ line 36 ~ getLoggedInUser ~ error", error)
		}
	}

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
