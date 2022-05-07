import {
  GET_USER_REJECT,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_LEARN_MORE,
} from "../constantan/userConstant";
export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true, users: [] };

    case GET_USER_SUCCESS:
      return { loading: false, users: action.payload };

    case GET_USER_REJECT:
      return { loading: false, error: action.payload };

    case GET_LEARN_MORE:
      return { loading: false, ...state, user: action.payload };

    default:
      return state;
  }
};
