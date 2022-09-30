import {
	GET_EXERCISE_COMMON_DATA_START, GET_EXERCISE_COMMON_DATA_SUCCESS, GET_EXERCISE_COMMON_DATA_FAILED,
	GET_FILTER_EXERCISE_COMMON_DATA, SET_PAGE_NUMBER
} from "../../../utils/Constant";
export const INITIAL_STATE = {
	loading: false,
	bodyParts: [],
	exercises: [],
	equipments: [],
	targets: [],
	error: "",
	totalCount: 0,
	currentPage: 1
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
				totalCount: 0,
				currentPage: 1
			}
		case GET_EXERCISE_COMMON_DATA_SUCCESS:
			const { bodyParts } = action.payload;
			const { exercises } = action.payload;
			const { equipments } = action.payload;
			const { targets } = action.payload;
			const { totalCount } = action.payload;
			return {
				loading: false,
				bodyParts: [...bodyParts],
				exercises: [...exercises],
				equipments: [...equipments],
				targets: [...targets],
				totalCount: totalCount,
				currentPage: 1
			}

		case GET_EXERCISE_COMMON_DATA_FAILED:
			return {
				loading: false,
				bodyParts: [],
				exercises: [],
				equipments: [],
				targets: [],
				error: "",
				totalCount: 0,
				currentPage: 1
			}

		case GET_FILTER_EXERCISE_COMMON_DATA:
			return {
				bodyParts: [...state.bodyParts],
				equipments: [...state.equipments],
				targets: [...state.targets],
				exercises: [...action.payload.exercises],
				totalCount: action.payload.totalCount,
				currentPage: state.currentPage
			}

		case SET_PAGE_NUMBER:
			return {
				bodyParts: [...state.bodyParts],
				equipments: [...state.equipments],
				targets: [...state.targets],
				exercises: [...state.exercises],
				totalCount: state.totalCount,
				currentPage: action.payload.currentPage
			}

		default:
			return INITIAL_STATE;
	}
}