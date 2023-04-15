import { getRepoData } from "../api/api";

const SET_REPO_URL = "SET_REPO_URL";
const SET_REPO_DATA = "SET_REPO_DATA";

const initialState = {
  repoUrl: null,
  repositoryData: null,
};

const setRepoData = (repoData) => ({
  type: SET_REPO_DATA,
  repoData,
});

export const setRepoUrl = (repoUrl) => ({
  type: SET_REPO_URL,
  repoUrl,
});

export const getRepositoryData = (link) => async (dispatch) => {
  let repoData = await getRepoData(link);
  dispatch(setRepoData(repoData));
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

    default:
      return state;
  }
};

export default repoDataReducer;
