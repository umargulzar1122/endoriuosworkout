import { GET_EXERCISE_COMMON_DATA_START, GET_EXERCISE_COMMON_DATA_SUCCESS, GET_EXERCISE_COMMON_DATA_FAILED } from "../../../utils/Constant";
export const INITIAL_STATE = {
	loading: false,
	bodyParts: [],
	exercises: [],
	equipments: [],
	targets: [],
	error: ""
};

export const ExerciseCommonReducer = (state, action) => {
	switch (action.type) {

		case GET_EXERCISE_COMMON_DATA_START:
			return {
				loading: true,
				bodyParts: [],
				exercises: [],
				equipments: [],
				targets: [],
			}
		case GET_EXERCISE_COMMON_DATA_SUCCESS:
			var { bodyParts } = action.payload;
			var { exercises } = action.payload;
			var { equipments } = action.payload;
			var { targets } = action.payload;
			return {
				loading: false,
				bodyParts: [...bodyParts],
				exercises: [...exercises],
				equipments: [...equipments],
				targets: [...targets],
			}

		case GET_EXERCISE_COMMON_DATA_FAILED:
			return {
				loading: false,
				bodyParts: [],
				exercises: [],
				equipments: [],
				targets: [],
				error: ""
			}

		default:
			return INITIAL_STATE;
	}
}