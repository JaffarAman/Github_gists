import ActionTypes from "../constants";

const INITIALSTATE = {
  getGistLoading: false,
  getGistData: [],

  ///Gist details states
  gistDetailLoading: false,
  gistDetailData: [],
};

const SearchGistsReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_GISTS_REQUEST:
      return {
        ...state,
        getGistLoading: true,
      };
    case ActionTypes.SEARCH_GISTS_SUCCESS:
      return {
        ...state,
        getGistLoading: false,
        getGistData: action.payload,
      };
    case ActionTypes.SEARCH_GISTS_FAIL:
      return {
        ...state,
        getGistLoading: false,
        getGistData: [],
      };
    default:
      return state;
  }
};

const GistsDetailReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.GISTS_DETAIL_REQUEST:
      return {
        ...state,
        gistDetailLoading: true,
      };
    case ActionTypes.GISTS_DETAIL_SUCCESS:
      return {
        ...state,
        gistDetailLoading: false,
        gistDetailData: action.payload,
      };
    case ActionTypes.GISTS_DETAIL_FAIL:
      return {
        ...state,
        gistDetailLoading: false,
        gistDetailData: [],
      };
    default:
      return state;
  }
};

export { SearchGistsReducer, GistsDetailReducer };
