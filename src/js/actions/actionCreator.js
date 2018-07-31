import apiService from "../api";
import * as ACTION from "./types";

export function getAllUsers() {
  return function (dispatch) {
    return apiService
      .getUsers()
      .then(data => {
        dispatch({ type: ACTION.GET_USERS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ACTION.DISPLAY_ERR, payload: err });
      });
  };
}

export function addUser(user) {
  return function (dispatch) {
    return apiService
      .addUser(user)
      .then(user => {
        dispatch({ type: ACTION.ADD_USER, payload: user });
      })
      .catch(error => {
        //throw error;
        dispatch({ type: ACTION.DISPLAY_ERR, payload: error });
      });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    return apiService
      .updateUser(user)
      .then(res => {
        dispatch({ type: ACTION.UPDATE_USER, payload: user });
      })
      .catch(error => {
        //throw error;
        dispatch({ type: ACTION.DISPLAY_ERR, payload: error });
      });
  };
}

export function deleteUserById(id) {
  return function (dispatch) {
    return apiService
      .deleteUser(id)
      .then(res => {
        dispatch({
          type: ACTION.DELETE_USER,
          payload: id
        });
      })
      .catch(error => {
        //throw error;
        dispatch({ type: ACTION.DISPLAY_ERR, payload: error });
      });
  };
}

