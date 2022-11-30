import { getMethod } from "../../utils/response";
import ActionTypes from "../constants";

const SearchGistsAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.SEARCH_GISTS_REQUEST,
      });
      const response = await getMethod(`users/${user}/gists`);
      dispatch({
        type: ActionTypes.SEARCH_GISTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.SEARCH_GISTS_FAIL,
        payload: error.response.data,
      });
    }
  };
};

const GistDetailAction = (gistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GISTS_DETAIL_REQUEST,
      });
      const response = await getMethod(`gists/${gistId}`);
      dispatch({
        type: ActionTypes.GISTS_DETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.GISTS_DETAIL_FAIL,
        payload: error.response.data,
      });
    }
  };
};

export { SearchGistsAction, GistDetailAction };
