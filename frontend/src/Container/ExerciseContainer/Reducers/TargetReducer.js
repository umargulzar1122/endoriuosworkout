import { ACTION_FETCH_TARGETS_STARTS, ACTION_FETCH_TARGETS_SUCCESS, ACTION_FETCH_TARGETS_FAILED } from "../../../utils/Constant";

export const TARGETS_INITIAL_STATE = {
	loading: false,
	targets: [],
	error: ""
};


export const TargetReducer = (state, action) => {
	switch (action.type) {
		case ACTION_FETCH_TARGETS_STARTS:
			//debugger
			return {
				loading: true,
				targets: [],
			};

		case ACTION_FETCH_TARGETS_SUCCESS:
			var { targets } = action.payload;
			return {
				loading: false,
				targets: [...targets],
			};

		case ACTION_FETCH_TARGETS_FAILED:
			var { error } = state;
			return {
				loading: false,
				targets: [],
				error
			};

		default:
			return TARGETS_INITIAL_STATE;
	}
}