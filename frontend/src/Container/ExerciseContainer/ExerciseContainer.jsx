import React, { useEffect, useReducer } from 'react'
import {
	GET_ALL_EQUIPMWNTS, GET_ALL_TARGET,
	GET_EXERCISES, GET_EXERCISE_COMMON_DATA_START, GET_ALL_BODY_PARTS, GET_EXERCISE_COMMON_DATA_SUCCESS, GET_EXERCISE_COMMON_DATA_FAILED, GET_FILTER_EXERCISE_COMMON_DATA, SET_PAGE_NUMBER
} from '../../utils/Constant';
import { motion } from "framer-motion";
import axios from 'axios';
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import { ExerciseCommonReducer, INITIAL_STATE } from "./Reducers/ExerciseCommonRecuder";
import "./ExercisesContainer.css";

var filter = { bodyPart: "", equipment: "", target: "" };

const ExerciseContainer = () => {
	const [exerciseCommonState, exerciseCommonRecuderDispatch] = useReducer(ExerciseCommonReducer, INITIAL_STATE);

	useEffect(() => {
		getAllData();
	}, []);

	useEffect(() => {
		getFilterExercises(1);
	}, [exerciseCommonState.currentPage]);

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
			const result = await (await axios.get(GET_EXERCISES)).data;

			exerciseCommonRecuderDispatch(
				{
					type: GET_EXERCISE_COMMON_DATA_SUCCESS,
					payload: {
						bodyParts: [...bodyParts],
						targets: [...targets],
						equipments: [...equipments],
						exercises: [...result.exercises],
						totalCount: result.exercisesCount,
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


	const handleFilter = (e) => {
		if (e.target.value !== "-1") {
			filter[e.target.name] = e.target.value;
			console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 77 ~ handleFilter ~ filter", filter)
		} else {
			filter[e.target.name] = "";
		}
	}

	const handlePageChange = (event) => {
		getFilterExercises(event.selected + 1);
	}

	const getFilterExercises = async (currentPage) => {
		try {
			let query = "";
			if (filter['bodyPart']) {
				query += 'bodyPart=' + filter['bodyPart'];
			}
			if (filter['target']) {
				query += '&target=' + filter['target'];
			}
			if (filter['equipment']) {
				query += '&equipment=' + filter['equipment'];
			}
			var result = await (await axios.get(`${GET_EXERCISES}?${query}&pageNumber=${currentPage}`)).data;
			exerciseCommonRecuderDispatch(
				{
					type: GET_FILTER_EXERCISE_COMMON_DATA,
					payload: {
						exercises: [...result.exercises],
						totalCount: result.exercisesCount
					}
				}
			);
		} catch (error) {
			console.log("🚀 ~ file: ExerciseContainer.jsx ~ line 89 ~ getFilterExercises ~ error", error)
		}
	}

	return (
		<>

			<div className='execiser-container' id='exercises'>
				<div className='options__container'>
					<div className='option__container'>
						<label htmlFor="bodyParts">Choose Body:</label>
						<select name="bodyPart" id="bodyParts" onChange={handleFilter}>
							<option value="-1">-- Select --</option>
							{
								exerciseCommonState.bodyParts && exerciseCommonState.bodyParts.map((bodyPart) => {
									return (<option key={bodyPart._id} value={bodyPart._id}>{bodyPart.name}</option>)
								})
							}
						</select>
					</div>
					<div className='option__container'>
						<label htmlFor="cars">Choose Equipment:</label>
						<select name="equipment" id="cars" onChange={handleFilter}>
							<option value="-1">-- Select --</option>
							{
								exerciseCommonState.equipments && exerciseCommonState.equipments.map((equipment) => {
									return (<option key={equipment._id} value={equipment._id}>{equipment.name}</option>)
								})
							}
						</select>
					</div>
					<div className='option__container'>
						<label htmlFor="target">Choose Target:</label>
						<select name="target" id="targets" onChange={handleFilter}>
							<option value="-1">-- Select --</option>
							{
								exerciseCommonState && exerciseCommonState.targets.map((target) => {
									return (<option key={target._id} value={target._id}>{target.name}</option>)
								})
							}
						</select>
					</div>
					<div>
						<button className='button__filter' onClick={getFilterExercises}>Filter</button>
					</div>
				</div>

				<div className='card__container'>
					{
						exerciseCommonState && exerciseCommonState.exercises.map((exercise) => {
							return (
								<>
									<motion.div className="card"
										whileHover={{ scale: 1.02 }}
										whileInView={{ opacity: [0.8, 1] }}
										transition={{ duration: 0.5, type: 'keyframes' }}
										key={`${exercise._id}`}>
										<img src={exercise.gifUrl} alt="Avatar" style={{ width: "100%", background: "transparent" }} />
										<div className="container">
											<h6>{exercise.name}</h6>
											<p>{exercise.bodyPart.name}</p>
											<p>{exercise.equipment.name}</p>
											<p>{exercise.target.name}</p>
										</div>
									</motion.div>
								</>
							)
						})
					}
				</div>
				<div style={{ display: "flex", margin: "40px", justifyContent: "center" }}>
					<ReactPaginate
						nextLabel=">"
						onPageChange={handlePageChange}
						pageRangeDisplayed={10}
						marginPagesDisplayed={0}
						pageCount={1532}
						previousLabel="<"
						pageClassName="page-item"
						pageLinkClassName="page-link"
						previousClassName="page-item"
						previousLinkClassName="page-link"
						nextClassName="page-item"
						nextLinkClassName="page-link"
						breakLabel="..."
						breakClassName="page-item"
						breakLinkClassName="page-link"
						containerClassName="pagination"
						activeClassName="active"
						renderOnZeroPageCount={null}
						style={{ padding: "40px" }}
					/>
				</div>
			</div>
		</>
	)
}

export default ExerciseContainer;