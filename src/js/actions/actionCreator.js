import apiService from "../api";
import * as ACTION from "./types";

export function getAllUsers() {
  return function(dispatch) {
    return apiService
      .getUsers()
      .then(data => {
        //return data
        dispatch({ type: ACTION.GET_USERS, payload: data });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addUser(user) {
  return function(dispatch) {
    return apiService
      .addUser(user)
      .then(user => {
        dispatch({ type: ACTION.ADD_USER, payload: user });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateUser(user) {
  return function(dispatch) {
    return apiService
      .updateUser(user)
      .then(res => {
        dispatch({ type: ACTION.UPDATE_USER, payload: user });
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteUserById(id) {
  return function(dispatch) {
    return apiService
      .deleteUser(id)
      .then(res => {
        dispatch({
          type: ACTION.DELETE_USER,
          payload: id
        });
      })
      .catch(error => {
        throw error;
      });
  };
}
