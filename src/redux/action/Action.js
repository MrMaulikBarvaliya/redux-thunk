import axios from "axios";
import {
  GET_USER_REJECT,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_LEARN_MORE,
} from "../constantan/userConstant";

export const UserAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get(
      " https://jsonplaceholder.typicode.com/photos"
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USER_REJECT,
      payload:
        error.data && error.res.data.message
          ? error.res.data.message
          : error.message,
    });
  }
};

export const UserOneData = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get(
      ` https://jsonplaceholder.typicode.com/photos/${id}`
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data });
    dispatch({ type: GET_LEARN_MORE, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USER_REJECT,
      payload:
        error.data && error.res.data.message
          ? error.res.data.message
          : error.message,
    });
  }
};
