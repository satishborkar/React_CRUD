import { BASE_URL } from "../helper/constants";
import * as ACTION from "../actions/types";
import store from "../store";

class apiService {
  static getUsers() {
    return fetch(BASE_URL)
      .then(res => {
        return res.json();
      })
      .catch(err => {
        //return err;
        const error = {
          statusCode: 503,
          message: "API service is currently unavailable...",
          result_code: "503"
        };
        store.dispatch({ type: ACTION.DISPLAY_ERR, payload: error });
        return err;
      });
  }

  static addUser(user) {
    return fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        return err;
      });
  }

  static updateUser(user) {
    return fetch(BASE_URL + user.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        return err;
      });
  }

  static deleteUser(id) {
    return fetch(BASE_URL + id, { method: "DELETE" })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        return err;
      });
  }
}

export default apiService;
