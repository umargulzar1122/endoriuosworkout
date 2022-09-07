import { ACTION_FETCH_EQUIPMENTS_STARTS, ACTION_FETCH_EQUIPMENTS_SUCEESS, ACTION_FETCH_EQUIPMENTS_FAILED } from "../../../utils/Constant";

export const EQUIPMENT_INITIAL_STATE = {
	loading: false,
	equipments: [],
	error: ""
};


export const EquipmentReducer = (state, action) => {
	switch (action.type) {
		case ACTION_FETCH_EQUIPMENTS_STARTS:
			//debugger
			return {
				loading: true,
				equipments: [],
			};

		case ACTION_FETCH_EQUIPMENTS_SUCEESS:
			var { equipments } = action.payload;
			return {
				loading: false,
				equipments: [...equipments],
			};

		case ACTION_FETCH_EQUIPMENTS_FAILED:
			var { error } = state;
			return {
				loading: false,
				equipments: [],
				error
			};

		default:
			return EQUIPMENT_INITIAL_STATE;
	}
}