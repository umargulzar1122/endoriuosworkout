import { ACTION_FETCH_BODY_PARTS_STARTS, ACTION_FETCH_BODY_PARTS_SUCEESS, ACTION_FETCH_BODY_PARTS_FAILED } from "../../../utils/Constant";
export const BODY_PARTS_INITIAL_STATE = {
	loading: false,
	bodyParts: [],
	error: ""
};

export const BodyPartsreducer = (state, action) => {
	switch (action.type) {
		case ACTION_FETCH_BODY_PARTS_STARTS:
			return {
				loading: true,
				bodyParts: [],
			};

		case ACTION_FETCH_BODY_PARTS_SUCEESS:
			var { bodyParts } = action.payload;
			return {
				loading: false,
				bodyParts: [...bodyParts],
			};

		case ACTION_FETCH_BODY_PARTS_FAILED:
			var { error } = state;
			return {
				loading: false,
				bodyParts: [],
				error
			};

		default:
			return BODY_PARTS_INITIAL_STATE;
	}
}