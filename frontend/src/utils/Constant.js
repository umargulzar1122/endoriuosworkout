const BASE_URL = "/api/v1";

export const GET_LOGGED_IN_USER = `${BASE_URL}/Users/getLoggedInUser`;

export const REGISTER_USER = `${BASE_URL}/Users/registerUser`;

export const LOGIN_USER = `${BASE_URL}/Users/login`;

export const LOGOUT_USER = `${BASE_URL}/Users/logout`;

export const UPDATE_PROFILE = `${BASE_URL}/Users/updateProfile`;


export const GET_ALL_BODY_PARTS = `${BASE_URL}/BodyParts/GetAllBodyparts`;

export const GET_ALL_EQUIPMWNTS = `${BASE_URL}/Equipment/GetAllEquipments`;

export const GET_ALL_TARGET = `${BASE_URL}/Target/GetAllTargets`;

export const ACTION_FETCH_BODY_PARTS_STARTS = "FETCH_BODY_PARTS_STARTS";

export const ACTION_FETCH_BODY_PARTS_SUCEESS = "FETCH_BODY_PARTS_SUCEESS";

export const ACTION_FETCH_BODY_PARTS_FAILED = "FETCH_BODY_PARTS_FAILED";

export const ACTION_FETCH_EQUIPMENTS_STARTS = "FETCH_EQUIPMENTS_STARTS";

export const ACTION_FETCH_EQUIPMENTS_SUCEESS = "FETCH_EQUIPMENTS_SUCEESS";

export const ACTION_FETCH_EQUIPMENTS_FAILED = "FETCH_EQUIPMENTS_FAILED";

export const ACTION_FETCH_TARGETS_STARTS = "FETCH_TARGETS_STARTS";

export const ACTION_FETCH_TARGETS_SUCCESS = "FETCH_TARGETS_SUCCESS";

export const ACTION_FETCH_TARGETS_FAILED = "FETCH_TARGETS_FAILED";


