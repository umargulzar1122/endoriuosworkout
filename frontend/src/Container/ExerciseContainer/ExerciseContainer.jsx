import React, { useEffect, useReducer } from 'react'
import { ACTION_FETCH_BODY_PARTS_FAILED, ACTION_FETCH_BODY_PARTS_STARTS, ACTION_FETCH_BODY_PARTS_SUCEESS, ACTION_FETCH_EQUIPMENTS_FAILED, ACTION_FETCH_EQUIPMENTS_STARTS, ACTION_FETCH_EQUIPMENTS_SUCEESS, GET_ALL_BODY_PARTS, GET_ALL_EQUIPMWNTS, ACTION_FETCH_TARGETS_FAILED, ACTION_FETCH_TARGETS_SUCCESS, ACTION_FETCH_TARGETS_STARTS, GET_ALL_TARGET } from '../../utils/Constant';
import { BodyPartsreducer, BODY_PARTS_INITIAL_STATE } from './Reducers/BodyPartsReducer';
import LoadingScreenComponent from '../LoadingScreen/LoadingScreenComponent';
import axios from 'axios';
import { EquipmentReducer, EQUIPMENT_INITIAL_STATE } from './Reducers/EquipmentReducer';
import { TargetReducer, TARGETS_INITIAL_STATE } from './Reducers/TargetReducer';

import "./ExercisesContainer.css";

const ExerciseContainer = () => {

	const [bodyPartsState, bodyPartsDispatch] = useReducer(BodyPartsreducer, BODY_PARTS_INITIAL_STATE);
	const [equipmentState, equipmentDispatch] = useReducer(EquipmentReducer, EQUIPMENT_INITIAL_STATE);
	const [targetState, targetDispatch] = useReducer(TargetReducer, TARGETS_INITIAL_STATE);

	console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 21 ~ ExerciseContainer ~ equipmentState", equipmentState)
	console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 17 ~ ExerciseContainer ~ bodyPartsState", bodyPartsState)

	useEffect(() => {
		bodyPartsDispatch(
			{
				type: ACTION_FETCH_BODY_PARTS_STARTS,
				payload: []
			}
		);
		equipmentDispatch(
			{
				type: ACTION_FETCH_EQUIPMENTS_STARTS,
				payload: []
			}
		);

		targetDispatch(
			{
				type: ACTION_FETCH_TARGETS_STARTS,
				payload: []
			}
		);

		getAllBodyparts();
		getAllEqipments();
		getAllTargets();
	}, []);

	const getAllBodyparts = async () => {
		try {
			var { bodyParts } = await (await axios.get(GET_ALL_BODY_PARTS)).data;
			//debugger
			bodyPartsDispatch(
				{
					type: ACTION_FETCH_BODY_PARTS_SUCEESS,
					payload: {
						bodyParts,
					}
				}
			);
		} catch (error) {
			bodyPartsDispatch(
				{
					type: ACTION_FETCH_BODY_PARTS_FAILED,
					payload: {
						bodyParts: [],
						error: error
					}
				}
			);
		}
	}

	const getAllEqipments = async () => {
		try {
			var { equipments } = await (await axios.get(GET_ALL_EQUIPMWNTS)).data;
			//debugger
			equipmentDispatch(
				{
					type: ACTION_FETCH_EQUIPMENTS_SUCEESS,
					payload: {
						equipments,
					}
				}
			);
		} catch (error) {
			equipmentDispatch(
				{
					type: ACTION_FETCH_EQUIPMENTS_FAILED,
					payload: {
						bodyParts: [],
						error: error
					}
				}
			);
		}
	}

	const getAllTargets = async () => {
		try {
			var { targets } = await (await axios.get(GET_ALL_TARGET)).data;
			debugger
			targetDispatch(
				{
					type: ACTION_FETCH_TARGETS_SUCCESS,
					payload: {
						targets,
					}
				}
			);
		} catch (error) {
			targetDispatch(
				{
					type: ACTION_FETCH_TARGETS_FAILED,
					payload: {
						targets: [],
						error: error
					}
				}
			);
		}
	}


	return (
		<>
			{
				bodyPartsState.loading ? <LoadingScreenComponent /> : ""
			}
			<div className='execiser-container'>
				<div className='options__container'>
					<div className='option__container'>
						<label htmlFor="bodyParts">Choose Body:</label>
						<select name="bodyParts" id="bodyParts">
							{
								bodyPartsState && bodyPartsState.bodyParts.map((bodyPart) => {
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
								equipmentState && equipmentState.equipments.map((equipment) => {
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
								targetState && targetState.targets.map((target) => {
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
					<div className="card">
						<img src="http://d205bpvrqc9yn1.cloudfront.net/0002.gif" alt="Avatar" style={{ width: "100%", background: "transparent" }} />
						<div className="container">
							<h6>John Doe</h6>
							<p>Architect & Engineer</p>
						</div>
					</div>
					<div className="card">
						<img src="http://d205bpvrqc9yn1.cloudfront.net/0002.gif" alt="Avatar" style={{ width: "100%", background: "transparent" }} />
						<div className="container">
							<h6>John Doe</h6>
							<p>Architect & Engineer</p>
						</div>
					</div>

					<div className="card">
						<img src="http://d205bpvrqc9yn1.cloudfront.net/0002.gif" alt="Avatar" style={{ width: "100%", background: "transparent" }} />
						<div className="container">
							<h6>John Doe</h6>
							<p>Architect & Engineer</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ExerciseContainer;