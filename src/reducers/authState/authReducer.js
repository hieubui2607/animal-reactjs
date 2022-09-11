import types from "./authTypes";

const initialState = {
  loading: false,
  isAuth: false,
  token_access: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token_access: action.payload.token_access,
      };
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token_access: action.payload.token_access,
      };
    case types.LOAD_USER_FAILED:
      return initialState;
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
export default authReducer;