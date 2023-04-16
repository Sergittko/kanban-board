import { getRepoData } from "../api/api";

const SET_REPO_URL = "SET_REPO_URL";
const SET_REPO_DATA = "SET_REPO_DATA";
const SET_REPO_FETCHING = "SET_REPO_FETCHING";

const initialState = {
  repoUrl: null,
  repositoryData: null,
  isRepoFetching: false,
};

const setRepoData = (repoData) => ({
  type: SET_REPO_DATA,
  repoData,
});

export const setRepoUrl = (repoUrl) => ({
  type: SET_REPO_URL,
  repoUrl,
});

export const setRepoFetching = (fetching) => ({
  type: SET_REPO_FETCHING,
  fetching,
});

export const getRepositoryData = (link) => (dispatch) => {
  dispatch(setRepoFetching(true));
  getRepoData(link)
    .then((repoData) => dispatch(setRepoData(repoData)))
    .then(() => dispatch(setRepoFetching(false)));
};

const repoDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPO_URL:
      return {
        ...state,
        repoUrl: action.repoUrl,
      };

    case SET_REPO_DATA:
      return {
        ...state,
        repositoryData: action.repoData,
      };

    case SET_REPO_FETCHING:
      return {
        ...state,
        isRepoFetching: action.fetching,
      };

    default:
      return state;
  }
};

export default repoDataReducer;
