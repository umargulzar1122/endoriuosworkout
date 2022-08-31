export const USER_REGISTER_INITIAL_STATE = {
	user: {
		email: "",
		userName: "",
		firstName: "",
		lastName: "",
		password: "",
		repeatPassword: "",
		phoneNumber: "",
		avatar: ""
	},
	loading: false,
	error: ""
}

export const UserReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_INPUT":
			var { user } = state;
			user[action.payload.name] = action.payload.value;
			return {
				loading: false,
				user: user,
				error: ""
			};

		case "POST_USER":
			return {
				loading: true,
				user: { ...state.user },
				error: ""
			}

		case "POST_USER_SUCCESS_FULLY":
			return {
				loading: false,
				user: { ...state.user },
				error: ""
			}

		case "POST_USER_ERROR":
			return {
				loading: false,
				user: { ...state.user },
				error: action.payload.error
			}

		default:
			return state;

	}
}