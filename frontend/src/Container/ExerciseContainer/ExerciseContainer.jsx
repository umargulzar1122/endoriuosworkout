import React, { useEffect, useReducer } from 'react'
import {
	GET_ALL_EQUIPMWNTS, GET_ALL_TARGET,
	GET_EXERCISES, GET_EXERCISE_COMMON_DATA_START, GET_ALL_BODY_PARTS, GET_EXERCISE_COMMON_DATA_SUCCESS, GET_EXERCISE_COMMON_DATA_FAILED
} from '../../utils/Constant';
//import { BodyPartsreducer, BODY_PARTS_INITIAL_STATE } from './Reducers/BodyPartsReducer';
import LoadingScreenComponent from '../LoadingScreen/LoadingScreenComponent';
import axios from 'axios';
//import { EquipmentReducer, EQUIPMENT_INITIAL_STATE } from './Reducers/EquipmentReducer';
//import { TargetReducer, TARGETS_INITIAL_STATE } from './Reducers/TargetReducer';
import { ExerciseCommonReducer, INITIAL_STATE } from "./Reducers/ExerciseCommonRecuder";
import "./ExercisesContainer.css";

const ExerciseContainer = () => {

	const [exerciseCommonState, exerciseCommonRecuderDispatch] = useReducer(ExerciseCommonReducer, INITIAL_STATE);

	//const [bodyPartsState, bodyPartsDispatch] = useReducer(BodyPartsreducer, BODY_PARTS_INITIAL_STATE);
	//const [equipmentState, equipmentDispatch] = useReducer(EquipmentReducer, EQUIPMENT_INITIAL_STATE);
	//const [targetState, targetDispatch] = useReducer(TargetReducer, TARGETS_INITIAL_STATE);

	//console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 21 ~ ExerciseContainer ~ equipmentState", equipmentState)
	//console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 17 ~ ExerciseContainer ~ bodyPartsState", bodyPartsState)

	useEffect(() => {

		getAllData();

		// bodyPartsDispatch(
		// 	{
		// 		type: ACTION_FETCH_BODY_PARTS_STARTS,
		// 		payload: []
		// 	}
		// );
		// equipmentDispatch(
		// 	{
		// 		type: ACTION_FETCH_EQUIPMENTS_STARTS,
		// 		payload: []
		// 	}
		// );
		// targetDispatch(
		// 	{
		// 		type: ACTION_FETCH_TARGETS_STARTS,
		// 		payload: []
		// 	}
		// );
		// getAllBodyparts();
		// getAllEqipments();
		// getAllTargets();

		// getExercises();
	}, []);

	const getAllBodyparts = async () => {
		try {
			//	var { bodyParts } = await (await axios.get(GET_ALL_BODY_PARTS)).data;
			//debugger
			// bodyPartsDispatch(
			// 	{
			// 		type: ACTION_FETCH_BODY_PARTS_SUCEESS,
			// 		payload: {
			// 			bodyParts,
			// 		}
			// 	}
			// );
		} catch (error) {
			// bodyPartsDispatch(
			// 	{
			// 		type: ACTION_FETCH_BODY_PARTS_FAILED,
			// 		payload: {
			// 			bodyParts: [],
			// 			error: error
			// 		}
			// 	}
			// );
		}
	}

	const getAllEqipments = async () => {
		try {
			//var { equipments } = await (await axios.get(GET_ALL_EQUIPMWNTS)).data;
			//debugger
			// equipmentDispatch(
			// 	{
			// 		type: ACTION_FETCH_EQUIPMENTS_SUCEESS,
			// 		payload: {
			// 			equipments,
			// 		}
			// 	}
			// );
		} catch (error) {
			// equipmentDispatch(
			// 	{
			// 		type: ACTION_FETCH_EQUIPMENTS_FAILED,
			// 		payload: {
			// 			bodyParts: [],
			// 			error: error
			// 		}
			// 	}
			// );
		}
	}

	const getAllTargets = async () => {
		try {
			//var { targets } = await (await axios.get(GET_ALL_TARGET)).data;
			// targetDispatch(
			// 	{
			// 		type: ACTION_FETCH_TARGETS_SUCCESS,
			// 		payload: {
			// 			targets,
			// 		}
			// 	}
			// );
		} catch (error) {
			// targetDispatch(
			// 	{
			// 		type: ACTION_FETCH_TARGETS_FAILED,
			// 		payload: {
			// 			targets: [],
			// 			error: error
			// 		}
			// 	}
			// );
		}
	}

	const getExercises = async () => {

		var exersises = await axios.get(GET_EXERCISES);
		console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 128 ~ getExercises ~ exersises", exersises)

	}

	const getAllData = async () => {
		try {


			exerciseCommonRecuderDispatch(
				{
					type: GET_EXERCISE_COMMON_DATA_START,
					payload: {
						bodyParts: [],
						targets: [],
						equipments: [],
						exersises: [],
						loading: true
					}
				}
			);

			var { bodyParts } = await (await axios.get(GET_ALL_BODY_PARTS)).data;
			var { equipments } = await (await axios.get(GET_ALL_EQUIPMWNTS)).data;
			var { targets } = await (await axios.get(GET_ALL_TARGET)).data;
			var { exercises } = await (await axios.get(GET_EXERCISES)).data;
			console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 156 ~ getAllData ~ exercises", exercises)

			exerciseCommonRecuderDispatch(
				{
					type: GET_EXERCISE_COMMON_DATA_SUCCESS,
					payload: {
						bodyParts: [...bodyParts],
						targets: [...targets],
						equipments: [...equipments],
						exercises: [...exercises],
						loading: false
					}
				}
			);


		} catch (error) {
			console.error("🚀 ~ file: ExerciseContainer.jsx ~ line 140 ~ getAllData ~ error", error);
			exerciseCommonRecuderDispatch(
				{
					type: GET_EXERCISE_COMMON_DATA_FAILED,
					payload: {
						bodyParts: [],
						targets: [],
						equipments: [],
						exersises: [],
						loading: false
					}
				}
			);
		}
	}



	return (
		<>

			<div className='execiser-container' id='exercises'>
				{
					//exerciseCommonState.loading ? <LoadingScreenComponent /> : ""
				}
				<div className='options__container'>
					<div className='option__container'>
						<label htmlFor="bodyParts">Choose Body:</label>
						<select name="bodyParts" id="bodyParts">
							{
								exerciseCommonState.bodyParts && exerciseCommonState.bodyParts.map((bodyPart) => {
									return (<option key={bodyPart._id} value={bodyPart._id}>{bodyPart.name}</option>)
								})
							}
							{/* <option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option> */}
						</select>
					</div>
					<div className='option__container'>
						<label htmlFor="cars">Choose Equipment:</label>
						<select name="cars" id="cars">
							{
								exerciseCommonState.equipments && exerciseCommonState.equipments.map((equipment) => {
									return (<option key={equipment._id} value={equipment._id}>{equipment.name}</option>)
								})
							}
							{/* <option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option> */}
						</select>
					</div>
					<div className='option__container'>
						<label htmlFor="targets">Choose Target:</label>
						<select name="targets" id="targets">
							{
								exerciseCommonState && exerciseCommonState.targets.map((target) => {
									return (<option key={target._id} value={target._id}>{target.name}</option>)
								})
							}
							{/* <option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="mercedes">Mercedes</option>
							<option value="audi">Audi</option> */}
						</select>
					</div>
				</div>

				<div className='card__container'>
					{
						exerciseCommonState && exerciseCommonState.exercises.map((exercise) => {
							return (
								<>
									<div className="card">
										<img src={exercise.gifUrl} alt="Avatar" style={{ width: "100%", background: "transparent" }} />
										<div className="container">
											<h6>{exercise.name}</h6>
											<p>{exercise.bodyPart.name}</p>
											<p>{exercise.equipment.name}</p>
											<p>{exercise.target.name}</p>
										</div>
									</div>
								</>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default ExerciseContainer;